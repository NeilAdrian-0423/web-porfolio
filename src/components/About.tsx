import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Smartphone, Zap, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: ["React", "TypeScript", "Nuxt.js", "Tailwind CSS", "Framer Motion", "Zustand"]
    },
    {
      category: "Backend Development", 
      icon: Server,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: ["Node.js", "Express", "Laravel", "Code Igniter", "REST APIs", "Microservices"]
    },
    {
      category: "Database & Tools",
      icon: Database,
      color: "text-purple-600", 
      bgColor: "bg-purple-50",
      items: ["Mysql",  "Mariadb", "MongoDB", "Redis", "Prisma", "Docker", "Git"]
    },
    {
      category: "Mobile & Automation",
      icon: Smartphone,
      color: "text-orange-600",
      bgColor: "bg-orange-50", 
      items: ["React Native", "PWA", "Go High Level", "n8n", "API Integration"]
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
            A passionate full-stack developer focused on creating efficient, scalable solutions 
            with modern web technologies and clean, maintainable code.
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
              As a dedicated full-stack developer, I specialize in building modern web applications 
              using React and Node.js. My passion lies in creating seamless user experiences backed 
              by robust, scalable server architectures.
            </p>
            <p className="leading-relaxed text-slate-600">
              I believe in writing clean, maintainable code and staying current with the latest 
              technologies. Whether it's crafting responsive frontends or designing efficient APIs, 
              I approach every project with attention to detail and a focus on performance.
            </p>
            
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "3+", label: "Years Coding", icon: Code2 },
                { number: "15+", label: "Projects Built", icon: Globe },
                { number: "10+", label: "Happy Clients", icon: Zap },
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
                  "Modern React development with hooks and context",
                  "Scalable Node.js backend architecture",
                  "Database design and optimization",
                  "RESTful API development and integration",
                  "Responsive design and mobile-first approach",
                  "Performance optimization and best practices"
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