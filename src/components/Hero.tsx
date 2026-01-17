import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown24Regular,
  ArrowDownload24Regular,
  ArrowRight24Regular,
  Mail24Regular
} from '@fluentui/react-icons';
import { Button } from '@/components/ui/button';

// Simple SVG icons for social media (Fluent UI doesn't include brand logos)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface HeroProps {
  onAssetLoaded?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAssetLoaded }) => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    if (videoLoaded && imageLoaded && onAssetLoaded) {
      onAssetLoaded();
    }
  }, [videoLoaded, imageLoaded, onAssetLoaded]);
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
        onCanPlayThrough={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
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
              className="absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-[#FF8437]/15 blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
              className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B1A]/10 blur-3xl"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 4 }}
              className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-[#FFa500]/10 blur-3xl"
            />
          </div>

          <div className="relative z-10 flex items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-5xl mx-auto text-center text-white"
            >
              {/* Portrait Image at top */}
              <motion.div variants={itemVariants} className="mb-6">
                <div className="relative inline-block">
                  {/* Orange accent glow behind image */}
                  <div className="absolute inset-0 bg-[#FF8437]/30 blur-2xl rounded-full scale-75" />

                  {/* Image container with mask */}
                  <div
                    className="relative overflow-hidden rounded-b-[100px]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                  >
                    <img
                      src="/portrait.webp"
                      alt="Portrait"
                      className="h-[400px] sm:h-[450px] w-auto object-contain mx-auto"
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>
              </motion.div>

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
                    <ArrowDownload24Regular className="w-5 h-5 mr-2" />
                    Download Resume
                    <ArrowRight24Regular className="w-4 h-4 ml-2" />
                  </Button>
                </motion.a>

                <div className="flex space-x-4">
                  {[
                    { icon: GithubIcon, href: "https://github.com/NeilAdrian-0423", label: "GitHub" },
                    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/neil-adrian-balolong-5a68002b5/", label: "LinkedIn" },
                    { icon: Mail24Regular, href: "mailto:dreyworks23@gmail.com", label: "Email" },
                    { icon: WhatsappIcon, href: "https://wa.me/639150520013", label: "WhatsApp" },
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
                  { number: "2+", label: "Years Experience" },
                  { number: "35+", label: "Projects Completed" },
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
                <ChevronDown24Regular className="w-8 h-8 mx-auto" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
