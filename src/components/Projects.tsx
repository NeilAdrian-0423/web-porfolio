import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import {
  Code24Regular,
  Server24Regular,
  Flash24Filled,
  Dismiss24Regular,
  Play24Filled,
} from '@fluentui/react-icons';
import { Button } from '@/components/ui/button';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform sampler2D uTex;
  uniform vec2 uTexRes;
  uniform vec2 uPlaneRes;
  uniform float uTime;
  uniform float uHover;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // CSS object-fit: cover behavior — keeps texture aspect, crops overflow.
  vec2 coverUv(vec2 uv) {
    float texAspect = uTexRes.x / uTexRes.y;
    float planeAspect = uPlaneRes.x / uPlaneRes.y;
    vec2 result = uv;
    if (texAspect > planeAspect) {
      float scale = planeAspect / texAspect;
      result.x = (uv.x - 0.5) * scale + 0.5;
    } else {
      float scale = texAspect / planeAspect;
      result.y = (uv.y - 0.5) * scale + 0.5;
    }
    return result;
  }

  void main() {
    vec2 screenUv = vUv;
    float dist = distance(screenUv, uMouse);
    float fall = smoothstep(0.6, 0.0, dist);
    float ripple = sin(dist * 32.0 - uTime * 4.0) * 0.022 * uHover * fall;
    vec2 dir = normalize(screenUv - uMouse + 0.0001);

    vec2 distortedUv = screenUv + dir * ripple;
    float aberr = 0.008 * uHover;

    vec4 col;
    col.r = texture2D(uTex, coverUv(distortedUv + dir * aberr)).r;
    col.g = texture2D(uTex, coverUv(distortedUv)).g;
    col.b = texture2D(uTex, coverUv(distortedUv - dir * aberr)).b;
    col.a = 1.0;

    vec3 brand = vec3(1.0, 0.518, 0.216);
    float glow = smoothstep(0.4, 0.0, dist) * uHover * 0.4;
    col.rgb = col.rgb + brand * glow * 0.5;

    gl_FragColor = col;
  }
`;

interface LiquidCardProps {
  image: string;
  title: string;
  type: string;
  meta: string;
  technologies: string[];
  index: number;
  onClick: () => void;
}

const LiquidCard: React.FC<LiquidCardProps> = ({ image, title, type, meta, technologies, index, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const uniforms = {
      uTex: { value: null as THREE.Texture | null },
      uTexRes: { value: new THREE.Vector2(1, 1) },
      uPlaneRes: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
    };

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';
    const texture = loader.load(image, (loaded) => {
      if (loaded.image) {
        uniforms.uTexRes.value.set(loaded.image.width, loaded.image.height);
      }
    });
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    uniforms.uTex.value = texture;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.uPlaneRes.value.set(w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    let target = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.uMouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height
      );
    };
    const onEnter = () => { target = 1; };
    const onLeave = () => { target = 0; };
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

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
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      io.disconnect();
      texture.dispose();
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [image]);

  return (
    <motion.div
      ref={containerRef}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/8 bg-slate-900/50 transition-[border-color,box-shadow] duration-300 hover:border-[#FF8437]/50 hover:shadow-[0_0_0_1px_rgba(255,132,55,0.4),0_0_60px_-10px_rgba(255,132,55,0.6),0_30px_80px_-20px_rgba(0,0,0,0.8)]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      <div className="absolute top-3 left-3 z-10">
        <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/10 text-white/95 border border-white/15 backdrop-blur">
          {type}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-12 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent text-white pointer-events-none">
        <h3 className="text-xl font-bold leading-tight mb-1 group-hover:text-[#FF8437] transition-colors">
          {title}
        </h3>
        <p className="font-mono text-[10px] tracking-widest uppercase opacity-60 mb-3">{meta}</p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white/10 border border-white/10">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 border border-white/10">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [selectedDescription, setSelectedDescription] = useState<string>('');

  const projects = [
    {
      title: 'Custom CRM',
      description:
        'This is the first project that I contributed to. I was task to add features fix bugs from that 6 years old project',
      image: '/databasy.svg',
      technologies: ['Laravel', 'Blade', 'Jquery', 'Bootstrap'],
      type: 'Full-Stack',
      icon: Code24Regular,
      videoUrl: 'https://drive.google.com/file/d/1ouciPu5mv7LeJsOes6IxRGAQbsgb70CC/preview',
      liveUrl: 'https://crm.databasy.io/login',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Elder Care Website / Senior Care Website',
      description:
        'Our client tasked us to develop an elder care website. I was responsible for implementing the frontend, translating the provided Figma design (created by our UI/UX designer) into a fully functional React application.',
      image: '/sicksitters.png',
      technologies: ['V1: React, Bootstrap, V2: Vue, Tailwind CSS'],
      type: 'Frontend',
      icon: Server24Regular,
      videoUrl: 'https://drive.google.com/file/d/1oDNg-aU0lIZUmRsLydOBgIXNqYPp4_7m/preview',
      liveUrl: 'https://sick-sitter.web.app/',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'HRIS',
      description: 'This is our Capstone Project for our Course as BSIT students',
      image: '/Biolock.png',
      technologies: ['React', 'Django', 'Kotlin', 'Tailwind CSS', 'Zustand'],
      type: 'Frontend',
      icon: Code24Regular,
      videoUrl: 'https://drive.google.com/file/d/1ywKj-3QmoUPzV-cVM0ykBI13rQGl2egz/preview',
      liveUrl: '/hris-preview.html',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Blog Post Website with Image Gallery',
      description:
        'Implemented a masonry-style layout for client blog images and added lightbox functionality, enabling users to click on images for an enhanced, full-view experience.',
      image: '/danielblog.png',
      technologies: ['Squarespace', 'HTML', 'CSS', 'JavaScript'],
      type: 'CMS',
      icon: Code24Regular,
      videoUrl: 'https://drive.google.com/file/d/1g9VmiLF8gKrTxfzEAYEPKx0czE2ndD39/preview',
      liveUrl: 'https://www.danielloughlin.com/',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Meeting Transcription & Workflow Automation',
      description:
        'Built a Python-based automation that transcribes meeting recordings, extracts key takeaways using AI, and automatically creates a Notion page with Google Drive links to the full recording and transcription. Integrated ShareX for upload monitoring and n8n for workflow automation.',
      image: '/n8n.png ',
      technologies: ['Python', 'n8n', 'Webhooks', 'Notion API', 'Google Drive API'],
      type: 'Automation',
      icon: Flash24Filled,
      videoUrl: 'https://drive.google.com/file/d/1Tj9R7CEO3bAagC1vFZTwxWd3DAtkevWk/preview',
      liveUrl: 'https://n8n.roochedigital.com/',
      githubUrl: '#',
      featured: false,
    },
  ];

  const openModal = (url: string, title: string, description: string) => {
    setSelectedUrl(url);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUrl(null);
    setSelectedTitle('');
    setSelectedDescription('');
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section
        id="projects"
        className="relative py-24 overflow-hidden bg-slate-950"
      >
        {/* Ambient background — orange + indigo glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(255,132,55,0.18) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(99,102,241,0.12) 0%, transparent 50%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
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
              Featured Work
            </p>
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-white">
              Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400">
              A showcase of full-stack applications, APIs, and automation solutions I've built
              using modern technologies and best practices.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <LiquidCard
                key={project.title}
                image={project.image}
                title={project.title}
                type={project.type}
                meta={project.featured ? 'Featured · 2024' : '2024'}
                technologies={project.technologies}
                index={index}
                onClick={() => openModal(project.liveUrl, project.title, project.description)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="mb-6 text-slate-400">Want to see more of my work?</p>
            <Button
              size="lg"
              className="bg-[#FF8437] hover:bg-[#f37526] text-white border-0"
              asChild
            >
              <a
                href="https://github.com/NeilAdrian-0423"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2"
              >
                <GithubIcon className="w-5 h-5" />
                <span>View All Projects on GitHub</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-5xl mx-auto overflow-hidden bg-slate-900 border border-white/10 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Play24Filled className="w-5 h-5 text-[#FF8437]" />
                <h3 className="text-lg font-bold text-white">{selectedTitle}</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="text-slate-400 hover:text-white hover:bg-white/10"
              >
                <Dismiss24Regular className="w-5 h-5" />
              </Button>
            </div>

            {/* iframe */}
            <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
              {selectedUrl && (
                <iframe
                  src={selectedUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={selectedTitle}
                />
              )}
              {selectedUrl && (
                <a
                  href={selectedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  aria-label="Open in new tab"
                  className="absolute z-10 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white transition-colors rounded-md shadow-lg top-3 right-3 bg-black/70 hover:bg-[#FF8437] backdrop-blur-sm border border-white/10"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Open in new tab</span>
                </a>
              )}
            </div>

            {/* Description */}
            {selectedDescription && (
              <div className="px-6 py-5 border-t border-white/10">
                <p className="leading-relaxed text-slate-300">{selectedDescription}</p>
              </div>
            )}

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-slate-950/50 flex justify-end">
              <Button
                variant="ghost"
                onClick={closeModal}
                className="text-slate-400 hover:text-white hover:bg-white/10"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;
