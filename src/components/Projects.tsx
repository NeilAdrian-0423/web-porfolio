import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  Github, Code2, Server, Smartphone, Zap, X, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const projects = [
    {
      title: "Custom CRM",
      description: "This is the first project that I contributed to. I was task to add features fix bugs from that 6 years old project",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "Blade", "Jquery", "Bootstrap"],
      type: "Full-Stack",
      icon: Code2,
      // For Google Drive videos, use the embed format:
      // https://drive.google.com/file/d/YOUR_FILE_ID/preview
      videoUrl: "https://drive.google.com/file/d/1234567890abcdef/preview",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Elder Care Website / Senior Care Website",
      description: "This is my First React Project where I just translated the Figma design into code",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React"],
      type: "Backend",
      icon: Server,
      // You can also use direct video URLs or YouTube embeds
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "#",
      featured: true
    },
    {
      title: "HRIS",
      description: "This is our Capstone Project for our Course as BSIT students",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Django", "Kotlin", "Tailwind CSS", "Zustand"],
      type: "Frontend",
      icon: Code2,
      videoUrl: "https://drive.google.com/file/d/0987654321fedcba/preview",
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
      videoUrl: "https://drive.google.com/file/d/abcdef1234567890/preview",
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
      videoUrl: "https://drive.google.com/file/d/fedcba0987654321/preview",
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
      videoUrl: "https://drive.google.com/file/d/1122334455667788/preview",
      githubUrl: "#",
      featured: false
    }
  ];

  const openModal = (videoUrl: string, title: string) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(title);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setSelectedTitle('');
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

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
    <>
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
                        <Button
                          variant="default"
                          className='bg-[#FF8437] hover:bg-[#f37526]'
                          size="sm"
                          onClick={() => openModal(project.videoUrl, project.title)}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          <span>Live Demo</span>
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
                      <CardTitle className="text-lg transition-colors group-hover:text-[#FF8437]">
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
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-2"
                          onClick={() => openModal(project.videoUrl, project.title)}
                        >
                          <Play className="w-4 h-4" />
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
            <Button size="lg" className='bg-[#ff8437] hover:bg-[#ff8e48]' asChild>
              <a href="#" className="inline-flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>View All Projects on GitHub</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedTitle}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Video Container */}
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              {selectedVideo && (
                <iframe
                  src={selectedVideo}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={selectedTitle}
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={closeModal}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;