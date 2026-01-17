import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code24Regular,
  Server24Regular,
  Flash24Filled,
  Dismiss24Regular,
  Play24Filled
} from '@fluentui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// GitHub icon SVG (Fluent UI doesn't include brand logos)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const projects = [
    {
      title: "Custom CRM",
      description: "This is the first project that I contributed to. I was task to add features fix bugs from that 6 years old project",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "Blade", "Jquery", "Bootstrap"],
      type: "Full-Stack",
      icon: Code24Regular,
      videoUrl: "https://drive.google.com/file/d/1ouciPu5mv7LeJsOes6IxRGAQbsgb70CC/preview",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Elder Care Website / Senior Care Website",
      description: "Our client tasked us to develop an elder care website. I was responsible for implementing the frontend, translating the provided Figma design (created by our UI/UX designer) into a fully functional React application.",
      image: "https://images.pexels.com/photos/5790810/pexels-photo-5790810.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["V1: React, Bootstrap, V2: Vue, Tailwind CSS"],
      type: "Backend",
      icon: Server24Regular,
      videoUrl: "https://drive.google.com/file/d/1oDNg-aU0lIZUmRsLydOBgIXNqYPp4_7m/preview",
      githubUrl: "#",
      featured: true
    },
    {
      title: "HRIS",
      description: "This is our Capstone Project for our Course as BSIT students",
      image: "https://images.pexels.com/photos/13657523/pexels-photo-13657523.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Django", "Kotlin", "Tailwind CSS", "Zustand"],
      type: "Frontend",
      icon: Code24Regular,
      videoUrl: "https://drive.google.com/file/d/1ywKj-3QmoUPzV-cVM0ykBI13rQGl2egz/preview",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Blog Post Website with Image Gallery",
      description: "Implemented a masonry-style layout for client blog images and added lightbox functionality, enabling users to click on images for an enhanced, full-view experience.",
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
      type: "Full-Stack",
      icon: Code24Regular,
      videoUrl: "https://drive.google.com/file/d/1g9VmiLF8gKrTxfzEAYEPKx0czE2ndD39/preview",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Meeting Transcription & Workflow Automation",
      description:
        "Built a Python-based automation that transcribes meeting recordings, extracts key takeaways using AI, and automatically creates a Notion page with Google Drive links to the full recording and transcription. Integrated ShareX for upload monitoring and n8n for workflow automation.",
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "n8n", "Webhooks", "Notion API", "Google Drive API"],
      type: "Automation",
      icon: Flash24Filled,
      videoUrl: "https://drive.google.com/file/d/1Tj9R7CEO3bAagC1vFZTwxWd3DAtkevWk/preview",
      githubUrl: "#",
      featured: false
    }
  ];

  const openModal = (videoUrl: string, title: string) => {
    setSelectedVideo(videoUrl);
    setSelectedTitle(title);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setSelectedTitle('');
    document.body.style.overflow = 'unset';
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
                          <Play24Filled className="w-4 h-4 mr-2" />
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
                          <Play24Filled className="w-4 h-4" />
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
              <a href="https://github.com/NeilAdrian-0423" target="_blank" className="inline-flex items-center space-x-2">
                <GithubIcon className="w-5 h-5" />
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
                <Dismiss24Regular className="w-6 h-6" />
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
