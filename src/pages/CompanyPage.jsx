import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Lightbulb, Users, Rocket, ShieldCheck, Globe, Cpu, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';

const CompanyPage = () => {
    const stats = [
        { label: "Years of Excellence", value: "5+" },
        { label: "Enterprise Clients", value: "20+" },
        { label: "Projects Delivered", value: "50+" },
        { label: "Team Strength", value: "15+" }
    ];

    const industries = [
        { name: "Retail & E-commerce", icon: <ShoppingCartIcon /> },
        { name: "Manufacturing", icon: <FactoryIcon /> },
        { name: "Education", icon: <GraduationCapIcon /> },
        { name: "FinTech", icon: <BanknoteIcon /> },
        { name: "Healthcare", icon: <HeartPulseIcon /> },
        { name: "Logistics", icon: <TruckIcon /> }
    ];

    const whyChooseUs = [
        { title: "Technical Expertise", desc: "Deep knowledge in modern stacks like React, Node.js, and Cloud Architecture." },
        { title: "Client-Centric Approach", desc: "We prioritize your business goals and user satisfaction above all." },
        { title: "Scalable Solutions", desc: "Building software that grows with your business, from MVP to Enterprise." },
        { title: "Agile Methodology", desc: "Rapid iterations, transparent communication, and timely delivery." }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-20 overflow-hidden"
        >
            {/* Hero Section */}
            <div className="relative px-6 text-center max-w-5xl mx-auto mb-32">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-flex p-4 rounded-full bg-white/5 border border-white/10"
                >
                    <Building2 className="text-accent" size={48} />
                </motion.div>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8"
                >
                    Stackvil <span className="text-accent">Technologies</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
                >
                    Pvt Ltd
                </motion.p>
                <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
                    A premier software development company dedicated to transforming businesses through innovative digital solutions. We build the technology that powers the future.
                </p>
            </div>

            {/* Stats Counter */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-10 h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <Target className="text-accent" /> Our Vision
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To be a global leader in software innovation, empowering businesses of all sizes to achieve their full potential through seamless, intelligent, and human-centric technology.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-10 h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Lightbulb size={120} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <Rocket className="text-accent" /> Our Mission
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To deliver high-quality, scalable, and secure software solutions that solve real-world problems. We strive to foster a culture of continuous learning and excellence.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>


            {/* Industries Served */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Industries We Serve</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent transition-all duration-300">
                                {ind.icon}
                            </div>
                            <span className="text-gray-300 font-medium text-center">{ind.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-6xl mx-auto px-6 mb-32">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Why Choose Stackvil?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {whyChooseUs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <CheckCircle className="text-accent shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center px-6">
                <Link to="/contact" className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-accent/50">
                    Partner With Us
                </Link>
            </div>
        </motion.div>
    );
};

// Simple Icon Components for specific section
const ShoppingCartIcon = () => <Users className="text-blue-400" size={32} />;
const FactoryIcon = () => <Building2 className="text-orange-400" size={32} />;
const GraduationCapIcon = () => <Globe className="text-green-400" size={32} />;
const BanknoteIcon = () => <ShieldCheck className="text-yellow-400" size={32} />;
const HeartPulseIcon = () => <Cpu className="text-red-400" size={32} />;
const TruckIcon = () => <Rocket className="text-blue-400" size={32} />;

export default CompanyPage;
