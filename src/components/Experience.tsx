import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase24Regular,
  Calendar24Regular,
  Location24Regular,
  HatGraduation24Regular,
  Certificate24Regular
} from '@fluentui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Rooche Digital",
      location: "Quezon, Philippines (Remote)",
      period: "Apr 2024 – Present",
      type: "Full Time • Remote",
      highlights: [
        "Built internal tools, automation systems, and MVPs using AI-assisted development, n8n workflows, and custom code",
        "Manage and maintain 20+ company and client websites on DigitalOcean droplets (Nginx, SSL, backups, monitoring)",
        "Serve as primary DevOps engineer handling deployments, Docker environments, DNS, and server hardening",
        "Developed workflow automations that significantly reduced manual work across marketing and operations",
        "Recruit and evaluate developer candidates through technical tests and code reviews",
        "Continue to maintain and enhance web applications across the stack (Laravel, Node.js, Vue, React, WordPress)"
      ]
    },
    {
      title: "Full Stack Web Developer",
      company: "Page One 247 / Sumo Media Pty. Ltd.",
      location: "Davao City, Philippines (Office)",
      period: "Mar 2023 – Apr 2024",
      type: "Intern → Full Time • Office",
      highlights: [
        "Designed and launched 15+ client websites using WordPress + Elementor for Australian SMBs",
        "Improved website performance with 30–40% PageSpeed increase through optimization",
        "Became primary maintainer of a 5-year-old Laravel + jQuery CRM, delivering 15+ new features and fixing 50+ bugs",
        "Built multiple client-facing apps using Laravel 9 + Vue.js 2 (Composition API, Pinia, Vue Router)",
        "Replaced outdated jQuery interfaces with responsive TailwindCSS frontends",
        "Worked directly with Australian CEO and senior developers in an all-English environment"
      ]
    },
    {
      title: "SEO Specialist",
      company: "The Dream Team Ph",
      location: "Davao City, Philippines (Remote)",
      period: "Nov 2019 – May 2021",
      type: "Part Time • Remote",
      highlights: [
        "Wrote and optimized 7 high-ranking blog posts using GKP, SEMrush, and Ubersuggest",
        "Completed full on-page SEO for 20+ WordPress sites (schema, meta tags, alt text)",
        "Improved site performance with CSS/JS minification, lazy loading → 35–50% PageSpeed improvements",
        "Audited and fixed technical SEO issues: broken links, redirect loops, crawl errors"
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Information Technology",
    school: "Interface Computer College",
    location: "Davao City, Philippines",
    period: "2020 – 2025",
    note: "Pursued degree via online classes while actively gaining full-time experience in web development."
  };

  const certifications = [
    "TESDA Certified: Computer System Servicing NCII",
    "TESDA Certified: Web Development NCIII"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="experience" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-900">
            Work Experience
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-600">
            My professional journey in web development, from SEO specialist to full-stack developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-4 bg-gradient-to-r from-slate-50 to-white">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#ffeadd] rounded-lg">
                        <Briefcase24Regular className="w-6 h-6 text-[#ff8437]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="mt-1 font-semibold text-[#ff8437]">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar24Regular className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Location24Regular className="w-3 h-3" />
                        {exp.location.split(" (")[0]}
                      </Badge>
                      <Badge className="bg-[#ff8437] hover:bg-[#ff924f]">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[#ff8437] rounded-full"></div>
                        <span className="text-slate-600">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid gap-8 mt-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <HatGraduation24Regular className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-slate-900">{education.degree}</h4>
                <p className="mt-1 text-[#ff8437] font-medium">{education.school}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar24Regular className="w-3 h-3" />
                    {education.period}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Location24Regular className="w-3 h-3" />
                    {education.location}
                  </Badge>
                </div>
                <p className="mt-4 text-sm italic text-slate-500">{education.note}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Certificate24Regular className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-600">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
