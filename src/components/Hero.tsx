import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden custom-bg backdrop-blur-md">
      {/* Animated Background Elements */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full p-8 bg-black/70 backdrop-blur-md ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white"
        >
          <div className="absolute inset-0">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
              className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 4 }}
              className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-cyan-500/10 blur-3xl"
            />
          </div>

          <div className="relative z-10 flex items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-5xl mx-auto text-center text-white"
            >
              <motion.div variants={itemVariants}>
                <motion.h1
                  className="mb-6 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Full-Stack Developer
                  <motion.span
                    className="block mt-4 text-2xl font-light text-transparent bg-white sm:text-3xl lg:text-4xl bg-clip-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Modern Web Solutions
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed sm:text-xl text-slate-300">
                  Passionate about building scalable web applications with modern technologies.
                  Experienced in creating seamless user experiences and robust backend systems
                  that drive business growth.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center mb-12 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
              >
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="px-8 py-3 text-lg text-[#FF8437] bg-white hover:bg-[#FF8437] hover:text-white">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.a>

                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/NeilAdrian-0423", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/neil-adrian-balolong-5a68002b5/", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:dreyworks23@gmail.com", label: "Email" },
                  ].map(({ icon: Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target='_blank'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="p-3 transition-all duration-300 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mb-12 sm:grid-cols-3"
              >
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "15+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="mb-2 text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                onClick={scrollToNext}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="transition-colors duration-300 text-white/70 hover:text-white"
              >
                <ChevronDown className="w-8 h-8 mx-auto" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;