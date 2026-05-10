import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Open24Regular } from '@fluentui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Procedural ripple layer — listens to its parent's mouse events,
// renders a transparent orange ripple wave at the cursor on hover.
const LiquidHoverLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uHover;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          float dist = distance(vUv, uMouse);
          float fall = smoothstep(0.5, 0.0, dist);

          // Ripple wave
          float wave = sin(dist * 35.0 - uTime * 4.0) * 0.5 + 0.5;
          wave *= fall * uHover;

          // Cursor glow
          float glow = smoothstep(0.35, 0.0, dist) * uHover;

          vec3 brand = vec3(1.0, 0.518, 0.216);
          float alpha = (wave * 0.20 + glow * 0.45) * uHover;

          gl_FragColor = vec4(brand, alpha);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => renderer.setSize(parent.clientWidth, parent.clientHeight, false);
    resize();
    window.addEventListener('resize', resize);

    let target = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      uniforms.uMouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height
      );
    };
    const onEnter = () => { target = 1; };
    const onLeave = () => { target = 0; };
    parent.addEventListener('mousemove', onMouseMove);
    parent.addEventListener('mouseenter', onEnter);
    parent.addEventListener('mouseleave', onLeave);

    let running = true;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { running = e.isIntersecting; }),
      { rootMargin: '200px' }
    );
    io.observe(canvas);

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!running) return;
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uHover.value += (target - uniforms.uHover.value) * 0.1;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', onMouseMove);
      parent.removeEventListener('mouseenter', onEnter);
      parent.removeEventListener('mouseleave', onLeave);
      io.disconnect();
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const AiProjects: React.FC = () => {
  const projects = [
    {
      title: "Cobox - Email Collaboration Platform",
      description:
        "Inspired by Missive, a full-featured email collaboration platform with real-time messaging, shared inboxes, and team collaboration tools built with modern architecture.",
      technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Docker", "Nginx"],
      liveUrl: "https://cobox.roochedigital.com",
    },
    {
      title: "Applicant Tracking System (ATS)",
      description:
        "A web-based ATS with Google OAuth, Kanban-style applicant tracking, job management, interview scheduling, and role-based access control.",
      technologies: ["PHP", "Supabase", "Google OAuth", "Kanban"],
      liveUrl: "https://ats.roochedigital.com",
    },
    {
      title: "AI API Gateway (AIC)",
      description:
        "API gateway that enables controlled sharing of Claude Code across the company via proxy, with API key management, usage tracking, and rate limiting.",
      technologies: ["React", "Node.js", "Claude Code", "Proxy"],
      liveUrl: "https://ai-center.roochedigital.com",
    },
    {
      title: "Centralized Access Management (CET)",
      description:
        "Full-stack centralized access management system for controlling employee access to company tools and applications with Google OAuth authentication.",
      technologies: ["FastAPI", "Vue.js 3", "PostgreSQL", "Google OAuth", "Docker"],
      liveUrl: "https://cet.roochedigital.com",
    },
    {
      title: "Project Management System (PMS)",
      description:
        "Comprehensive project management system with Google SSO, role-based access control (Admin, Coordinator, Representative, Developer), activity logging, and webhook integrations.",
      technologies: ["Express.js", "PostgreSQL", "Google OAuth", "Webhooks"],
      liveUrl: "https://pms.roochedigital.com",
    },
    {
      title: "Overtime & Undertime System (OTS)",
      description:
        "Web application for managing overtime and undertime requests, integrating with ERPNext via n8n workflows for automated approvals and tracking.",
      technologies: ["React", "Node.js", "n8n", "ERPNext"],
      liveUrl: "https://ots.roochedigital.com",
    },
    {
      title: "Slate - Task Management App",
      description:
        "A modern Todoist-inspired task management application with real-time WebSocket updates, built as a monorepo with Turborepo.",
      technologies: ["Next.js 15", "Fastify", "tRPC", "Prisma", "PostgreSQL", "WebSockets"],
      liveUrl: "https://slate.roochedigital.com",
    },
    {
      title: "Kinetix - Custom CRM",
      description:
        "A customized CRM solution built for Rooche Digital's internal operations and workflow management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Google OAuth"],
      liveUrl: "https://kinetix.roochedigital.com",
    },
    {
      title: "URL Shortener",
      description:
        "Self-hosted URL shortener with custom aliases, password-protected links, click tracking analytics, and multi-user support with invites.",
      technologies: ["Vue 3", "Node.js", "Bun"],
      liveUrl: "https://url.roochedigital.com",
    },
    {
      title: "Ticketing System",
      description:
        "Ticketing system for managing internal support requests, with Google SSO authentication, ticket categorization, status tracking, and integration with Google Drive for file attachments. ",
      technologies: ["Vuejs", "Laravel",  "PostgreSQL", "Google Drive API"],
      liveUrl: "https://tickets.roochedigital.com/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="ai-projects" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, rgba(255,132,55,0.10) 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(99,102,241,0.10) 0%, transparent 50%)',
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
            AI Assisted
          </p>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-white">
            AI Assisted Development
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            Internal tools, automation systems, and full-stack applications I built for{' '}
            <span className="font-semibold text-[#FF8437]">Rooche Digital</span> using
            AI-assisted development — all self-hosted on DigitalOcean.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <Card className="relative h-full overflow-hidden transition-all duration-300 bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-[#FF8437]/40 hover:shadow-[0_0_40px_-10px_rgba(255,132,55,0.3)] group hover:-translate-y-1">
                <LiquidHoverLayer />
                <div className="relative z-10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-white transition-colors group-hover:text-[#FF8437]">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-white/5 text-slate-300 border border-white/10">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-white/5 text-slate-300 border border-white/10">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 text-slate-300 hover:text-[#FF8437] hover:bg-[#FF8437]/10"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Open24Regular className="w-4 h-4 mr-1" />
                        <span className="text-xs">Visit</span>
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AiProjects;
