import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, ArrowRight, ChevronDown, Globe, Layers, Zap, Database } from 'lucide-react';

import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">


            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest mb-6 uppercase backdrop-blur-sm">
                        Available for Enterprise Projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight"
                >
                    Sonali Priya
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mb-8"
                >
                    <p className="text-xl md:text-2xl text-white font-medium mb-2">
                        Software Developer, Stackvil Technologies Pvt Ltd
                    </p>
                    <p className="text-lg text-gray-400 font-light">
                        Building scalable digital products for real businesses.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link to="/projects" className="group px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2">
                        View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const AboutPreview = () => (
    <section className="pt-0 pb-20 bg-primary border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Passionate Developer</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                As a Software Developer at Stackvil Technologies, I specialize in building robust, scalable, and high-performance digital solutions. I combine technical expertise with a keen eye for design to deliver exceptional user experiences.
            </p>
            <Link to="/projects" className="text-accent hover:text-white font-medium transition-colors inline-flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
            </Link>
        </div>
    </section>
);

const Clients = () => (
    <section className="py-16 bg-secondary/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted By Innovative Companies</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {['TechCorp', 'InnovateInc', 'FutureSystems', 'GlobalSoft', 'EnterpriseOne'].map((client) => (
                    <div key={client} className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default select-none">
                        {client}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Scalable, high-performance web applications built with React, Next.js, and modern tech stacks.",
            icon: <Globe className="text-accent" size={32} />
        },
        {
            title: "UI/UX Engineering",
            description: "Crafting immersive, interactive, and accessible user experiences with pixel-perfect precision.",
            icon: <Layers className="text-pink-500" size={32} />
        },
        {
            title: "Backend Solutions",
            description: "Robust API structures, database management, and server-side logic using Node.js and Cloud services.",
            icon: <Database className="text-blue-500" size={32} />
        },
        {
            title: "Performance Optimization",
            description: "Speed enhancement, SEO strategies, and code refactoring for lightning-fast digital products.",
            icon: <Zap className="text-yellow-500" size={32} />
        }
    ];

    return (
        <section id="services" className="py-32 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Digital Capabilities.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions for modern businesses.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <GlassCard className="p-8 h-full group hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)]">
                                <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const works = [
        {
            title: "Enterprise Dashboard",
            category: "SaaS Platform",
            description: "A high-fidelity analytics dashboard for enterprise clients, featuring real-time data visualization.",
            tech: ["React", "D3.js", "TypeScript"],
            image: "from-purple-900 to-indigo-900",
        },
        {
            title: "FinTech Solution",
            category: "Web Application",
            description: "Secure and swift financial transaction platform with institutional-grade security protocols.",
            tech: ["Next.js", "PostgreSQL", "Tailwind"],
            image: "from-slate-900 to-gray-800",
        },
        {
            title: "AI Chat Interface",
            category: "Artificial Intelligence",
            description: "An intuitive conversational UI powered by LLMs to enhance customer support automation.",
            tech: ["OpenAI API", "React", "Framer"],
            image: "from-blue-900 to-cyan-900",
        }
    ];

    return (
        <section id="projects" className="py-32 bg-primary relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Selected Works.</h2>
                        <p className="text-gray-400 max-w-xl">A showcase of technical excellence and creative problem-solving.</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-accent font-medium hover:text-white transition-colors">
                        View All Projects <ArrowRight size={16} />
                    </a>
                </motion.div>

                <div className="space-y-20">
                    {works.map((work, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group relative grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className={`order-2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="space-y-6">
                                    <span className="text-accent text-sm font-mono tracking-widest uppercase">{work.category}</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors duration-300">{work.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{work.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {work.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-gray-300">{t}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-6 pt-4">
                                        <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium">
                                            <Github size={18} /> CodeBase
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={`order-1 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${work.image} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    {/* Placeholder for project mockups */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white font-mono text-xl">
                                        PROJECT MOCKUP
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-secondary relative overflow-hidden">
            <div className="absolute -left-20 top-20 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's Build the Future.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Ready to elevate your digital presence? I am currently accepting new enterprise contracts and freelance opportunities.
                    </p>
                    <a href="mailto:contact@sonali.dev" className="inline-block px-10 py-5 bg-accent text-white font-bold rounded-full text-lg shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)] hover:scale-105 transition-all duration-300">
                        Start a Project
                    </a>
                </motion.div>

                <div className="mt-24 flex justify-center gap-12">
                    {[Github, Linkedin, Mail].map((Icon, idx) => (
                        <a key={idx} href="#" className="p-4 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                            <Icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <AboutPreview />

        </motion.div>
    );
};

export default Home;
