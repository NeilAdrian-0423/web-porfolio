import React from 'react';
import { motion } from 'framer-motion';
import {
  Code24Regular,
  Server24Regular,
  Database24Regular,
  Settings24Regular,
  Flash24Filled,
  Globe24Regular
} from '@fluentui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code24Regular,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: ["HTML5/CSS3", "JavaScript", "TypeScript", "React.js", "Vue.js", "Zustand", "Pinia", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: Server24Regular,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: ["Node.js", "Laravel", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      category: "CMS & Platforms",
      icon: Database24Regular,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: ["WordPress", "WooCommerce", "Elementor", "Go High Level"]
    },
    {
      category: "DevOps & Automation",
      icon: Settings24Regular,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      items: ["Git", "Docker", "Nginx", "SSL", "CI/CD", "Digital Ocean", "n8n", "Python"]
    }
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
    <section id="about" className="py-20 bg-slate-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-900">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-600">
            A Full Stack Web Developer with 2+ years of experience building scalable web applications,
            managing digital infrastructure, and delivering modern solutions using Laravel, React, Vue.js, and Node.js.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 mb-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900">My Development Journey</h3>
            <p className="leading-relaxed text-slate-600">
              Currently serving as a Full Stack Web Developer at Rooche Digital, where I manage 20+ company
              and client websites, build internal tools and automation systems, and serve as the primary
              DevOps engineer handling deployments, Docker environments, DNS, and server management.
            </p>
            <p className="leading-relaxed text-slate-600">
              Previously at Page One 247/Sumo Media, I designed 15+ client websites, maintained a legacy
              Laravel CRM, and built multiple client-facing apps using Laravel and Vue.js. I bring hands-on
              experience with AI-assisted development, n8n workflows, and full-stack architecture.
            </p>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "2+", label: "Years Coding", icon: Code24Regular },
                { number: "35+", label: "Projects Built", icon: Globe24Regular },
                { number: "20+", label: "Sites Managed", icon: Flash24Filled },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-[#FF8437]" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">What I Bring to the Table</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Full-stack development with Laravel, React, and Vue.js",
                  "DevOps & server management (Nginx, Docker, SSL, DigitalOcean)",
                  "WordPress development and WooCommerce solutions",
                  "Workflow automation with n8n and custom integrations",
                  "Legacy system maintenance and modernization",
                  "Performance optimization and SEO best practices"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[#FF8437] rounded-full"></div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 bg-white border-0 hover:shadow-lg group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={`h-6 w-6 ${skill.color}`} />
                  </div>
                  <CardTitle className="text-lg">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
