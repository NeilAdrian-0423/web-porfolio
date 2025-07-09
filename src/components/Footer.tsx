import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 overflow-hidden text-white bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4 space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="w-8 h-8 text-blue-400" />
              </motion.div>
              <span className="text-xl font-bold">Neil Adrian Balolong</span>
            </div>
            <p className="mb-4 leading-relaxed text-slate-400">
              Full-stack developer passionate about creating modern web applications 
              and scalable solutions with React and Node.js.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="transition-colors duration-200 text-slate-400 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <a 
                    href={link.href}
                    className="inline-block transition-colors duration-200 transform text-slate-400 hover:text-white hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>dreyworks23@gmail.com</p>
              <p>+639150520013</p>
              <p>Davao City</p>
            </div>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:text-white hover:border-white"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <Separator className="mb-8 bg-slate-800" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="flex items-center justify-center space-x-1 text-slate-400">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Neil Adrian Balolong • © 2024 All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;