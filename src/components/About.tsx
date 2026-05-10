import React from 'react';
import { motion } from 'framer-motion';
import {
  Code24Regular,
  Database24Regular,
  Settings24Regular,
  Flash24Filled,
  Globe24Regular,
  Sparkle24Filled
} from '@fluentui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { yearsOfExperience } from '@/lib/utils';

const About: React.FC = () => {
  const skills = [
    {
      category: "Full Stack Development",
      icon: Code24Regular,
      color: "text-blue-300",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      items: ["TypeScript", "React.js", "Vue.js", "Next.js", "Tailwind CSS", "Node.js", "Laravel", "FastAPI", "PostgreSQL", "REST APIs"]
    },
    {
      category: "CMS & Platforms",
      icon: Database24Regular,
      color: "text-violet-300",
      bgColor: "bg-violet-500/10 border-violet-500/20",
      items: ["WordPress", "WooCommerce", "Elementor", "Go High Level"]
    },
    {
      category: "DevOps & Automation",
      icon: Settings24Regular,
      color: "text-[#FF8437]",
      bgColor: "bg-[#FF8437]/10 border-[#FF8437]/20",
      items: ["Git", "Docker", "Nginx", "SSL", "CI/CD", "Digital Ocean", "n8n", "Python"]
    },
    {
      category: "AI-Assisted Development",
      icon: Sparkle24Filled,
      color: "text-fuchsia-300",
      bgColor: "bg-fuchsia-500/10 border-fuchsia-500/20",
      items: ["Claude Code", "OpenCode", "Cursor", "Anthropic API", "MCP"]
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
    <section id="about" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(255,132,55,0.10) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(99,102,241,0.08) 0%, transparent 50%)',
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
            About
          </p>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-white">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            A Full Stack Web Developer with {yearsOfExperience()}+ years of experience building scalable web applications,
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
            <h3 className="text-2xl font-bold text-white">My Development Journey</h3>
            <p className="leading-relaxed text-slate-400">
              Currently serving as a Full Stack Web Developer at Rooche Digital, where I manage 20+ company
              and client websites, build internal tools and automation systems, and serve as the primary
              DevOps engineer handling deployments, Docker environments, DNS, and server management.
            </p>
            <p className="leading-relaxed text-slate-400">
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
                { number: `${yearsOfExperience()}+`, label: "Years Coding", icon: Code24Regular },
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
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
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
            <Card className="p-6 bg-slate-900/50 border border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white">What I Bring to the Table</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "AI product engineering — shipping internal tools end-to-end with Claude Code (CRMs, dashboards, API gateways)",
                  "Full-stack across Node.js, Python (FastAPI), Laravel, Vue, React, and Next.js",
                  "DevOps & self-hosted infrastructure (Docker, Nginx, SSL, DigitalOcean)",
                  "Workflow automation with n8n, webhooks, and Notion / Google API integrations",
                  "Database design across PostgreSQL, MySQL, and Supabase",
                  "Legacy system maintenance and modernization"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-[#FF8437] rounded-full"></div>
                    <span className="text-slate-300">{item}</span>
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
              <Card className="h-full transition-all duration-300 bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-[#FF8437]/30 hover:shadow-[0_0_40px_-10px_rgba(255,132,55,0.3)] group hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${skill.bgColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={`h-6 w-6 ${skill.color}`} />
                  </div>
                  <CardTitle className="text-lg text-white">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10">
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
