import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail24Regular,
  Call24Regular,
  Location24Regular,
} from '@fluentui/react-icons';

// Social icons (Fluent UI doesn't include brand logos)
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

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail24Regular,
      label: "Email",
      value: "dreyworks23@gmail.com",
      href: "mailto:dreyworks23@gmail.com"
    },
    {
      icon: Call24Regular,
      label: "Phone",
      value: "+639150520013",
      href: "tel:+639150520013"
    },
    {
      icon: Location24Regular,
      label: "Location",
      value: "Davao City, Philippines",
      href: "https://maps.app.goo.gl/vktukUcuUUNCfMmT8"
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/NeilAdrian-0423",
      color: "hover:text-gray-900"
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/neil-adrian-balolong-5a68002b5",
      color: "hover:text-blue-600"
    },
    {
      icon: WhatsappIcon,
      label: "WhatsApp",
      href: "https://wa.me/639150520013",
      color: "hover:text-green-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,132,55,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs tracking-widest text-[#FF8437] uppercase mb-3">
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-white">
            Get In Touch
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="p-6 space-y-2 bg-slate-900/50 border border-white/10 backdrop-blur-sm rounded-xl">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center p-4 space-x-4 transition-colors duration-200 rounded-lg hover:bg-white/5 group"
                >
                  <div className="p-3 transition-colors duration-200 bg-[#FF8437]/10 border border-[#FF8437]/20 rounded-lg group-hover:bg-[#FF8437]/20">
                    <info.icon className="w-6 h-6 text-[#FF8437]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.label}</h4>
                    <p className="text-slate-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 bg-slate-900/50 border border-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="mb-4 text-lg font-semibold text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 transition-all duration-200 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-[#FF8437]/10 hover:border-[#FF8437]/30 hover:text-[#FF8437]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
