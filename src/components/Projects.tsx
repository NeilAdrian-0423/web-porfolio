import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Server, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT", "Tailwind CSS"],
      type: "Full-Stack",
      icon: Code2,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with user authentication, role-based permissions, real-time notifications, and comprehensive documentation.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Swagger"],
      type: "Backend",
      icon: Server,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "React Dashboard",
      description: "Modern admin dashboard with data visualization, real-time updates, and responsive design. Built with React hooks and context for state management.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Chart.js", "React Query", "Zustand"],
      type: "Frontend",
      icon: Code2,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Mobile-First PWA",
      description: "Progressive Web App with offline functionality, push notifications, and native-like experience. Optimized for mobile performance.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "PWA", "Service Workers", "IndexedDB", "Web Push"],
      type: "Mobile",
      icon: Smartphone,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, user presence indicators, and message history.",
      image: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
      type: "Full-Stack",
      icon: Code2,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Business Automation Workflow",
      description: "Custom automation solution using n8n and Go High Level for lead management, email sequences, and CRM integration.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["n8n", "Go High Level", "Webhooks", "API Integration"],
      type: "Automation",
      icon: Zap,
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Full-Stack": "bg-blue-100 text-blue-800",
      "Frontend": "bg-green-100 text-green-800", 
      "Backend": "bg-purple-100 text-purple-800",
      "Mobile": "bg-orange-100 text-orange-800",
      "Automation": "bg-yellow-100 text-yellow-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-900">
            Featured Projects
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-600">
            A showcase of full-stack applications, APIs, and automation solutions I've built 
            using modern technologies and best practices.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-slate-900">Featured Work</h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden transition-all duration-300 bg-white border-0 hover:shadow-xl group hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute flex items-center space-x-2 top-4 left-4">
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="p-2 rounded-lg bg-white/90 backdrop-blur-sm">
                        <project.icon className="w-5 h-5 text-slate-700" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl transition-colors group-hover:text-[#FF8437]">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed text-slate-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button variant="default" className='bg-[#FF8437] hover:bg-[#f37526]' size="sm" asChild>
                        <a href={project.liveUrl} className="flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} className="flex items-center space-x-2">
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="mb-8 text-2xl font-bold text-slate-900">More Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 bg-white border-0 hover:shadow-lg group hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={getTypeColor(project.type)} variant="secondary">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg transition-colors group-hover:text-blue-600">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="ghost" size="sm" asChild className="p-2">
                        <a href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="p-2">
                        <a href={project.githubUrl}>
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-slate-600">Want to see more of my work?</p>
          <Button size="lg" asChild>
            <a href="#" className="inline-flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;