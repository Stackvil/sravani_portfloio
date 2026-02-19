import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Cpu, Award, Briefcase, Calendar, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Intro = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary z-10" />

            <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    I’m <span className="text-accent">SonaliPriya</span>.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light"
                >
                    Front-end Developer & CMO at <span className="text-white font-semibold">Stackvil Technologies Pvt Ltd</span>.
                    I design and build <span className="text-accent">scalable web, mobile, and enterprise solutions</span> for real-world businesses.
                </motion.p>
            </div>
        </section>
    );
};

const Stats = () => {
    const stats = [
        { label: "Projects Delivered", value: "10+", icon: <Briefcase /> },
        { label: "Industries Served", value: "5+", icon: <Globe /> },
        { label: "Years Experience", value: "4+", icon: <Calendar /> },
        { label: "Client Satisfaction", value: "100%", icon: <Star /> }
    ];

    return (
        <section className="py-12 relative z-20 -mt-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <GlassCard className="p-6 text-center border-accent/20">
                                <div className="text-accent mb-4 flex justify-center opacity-80">{stat.icon}</div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Timeline = () => {
    const events = [
        { year: "2024", title: "Lead Developer", desc: "Spearheading enterprise architecture and team leadership at Stackvil." },
        { year: "2023", title: "Scale & Performance", desc: "Optimized high-traffic applications for fintech clients." },
        { year: "2022", title: "Joined Stackvil", desc: "Started journey as a core developer contributing to SaaS products." },
        { year: "2021", title: "The Beginning", desc: "Freelance full-stack development and open source contributions." }
    ];

    return (
        <section className="py-24 bg-secondary/30">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl font-bold text-white mb-16 text-center"
                >
                    My Journey
                </motion.h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-12 md:pl-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_#8b5cf6]" />
                            <div className={`md:flex items-start justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 group`}>
                                <div className="hidden md:block w-1/2" />
                                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="text-accent font-mono text-xl">{event.year}</span>
                                    <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-accent transition-colors">{event.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{event.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const skills = [
        { name: "Web Development", level: 95, icon: <Globe size={18} /> },
        { name: "Mobile App Dev", level: 85, icon: <Cpu size={18} /> },
        { name: "SaaS Architecture", level: 90, icon: <Database size={18} /> },
        { name: "UI/UX Design", level: 88, icon: <Code size={18} /> },
    ];

    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
                    <p className="text-gray-400">Mastery across the full spectrum of digital product development.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex justify-between text-white font-medium mb-2">
                                    <span className="flex items-center gap-2 text-accent">{skill.icon} {skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-accent shadow-[0_0_10px_#8b5cf6]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative min-h-[300px]">
                        {/* Placeholder for a skills cloud or visual */}
                        <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-3 opacity-60">
                            {['React', 'Next.js', 'Node.js', 'Three.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Docker', 'AWS', 'Figma', 'GSAP', 'Framer Motion'].map(tag => (
                                <motion.span
                                    key={tag}
                                    whileHover={{ scale: 1.1, color: '#fff' }}
                                    className="px-4 py-2 border border-white/10 rounded-full text-gray-400 text-sm cursor-default hover:border-accent hover:bg-accent/10 transition-all"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Philosophy = () => (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-primary text-center">
        <div className="max-w-3xl mx-auto px-6">
            <Award className="mx-auto text-accent mb-6" size={48} />
            <h2 className="text-4xl font-bold text-white mb-8">Philosophy & Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
                "I believe that technology should be invisible. It should work so smoothly that the user focuses only on the value it provides. My goal is to build digital ecosystems that are not just functional, but inspiring."
            </p>
        </div>
    </section>
);

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20"
        >
            <Intro />
            <Stats />
            <Timeline />
            <Skills />
            <Philosophy />
        </motion.div>
    );
};

export default About;
