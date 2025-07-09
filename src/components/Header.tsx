import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Home, User, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Code2 className={cn(
              "h-8 w-8 transition-colors duration-300",
              isScrolled ? "text-[#FF8437]" : "text-white"
            )} />
            <span className={cn(
              "text-xl font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Neil Adrian Balolong
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-1 md:flex">
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "flex items-center space-x-2 transition-all duration-200",
                    isScrolled 
                      ? "text-[#FF8437] hover:text-foreground hover:bg-accent" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-b md:hidden bg-background/95 backdrop-blur-sm"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map(({ id, label, icon: Icon }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(id)}
                    className="justify-start w-full space-x-2 text-muted-foreground hover:text-foreground hover:bg-accent"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;