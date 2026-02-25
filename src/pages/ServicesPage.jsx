import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Building2, ShoppingCart, TrendingUp, Rocket, Palette, Server, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const services = [
        {
            title: "Web Development",
            description: "High-performance, SEO-optimized websites and web applications using Next.js, React, and modern CSS frameworks.",
            icon: <Globe size={40} />,
            features: ["SPA & PWA", "SEO Optimization", "Responsive Design"]
        },
        {
            title: "Mobile App Development",
            description: "Cross-platform mobile applications for iOS and Android delivering native-like performance and experience.",
            icon: <Smartphone size={40} />,
            features: ["React Native", "iOS & Android", "App Store Deployment"]
        },
        {
            title: "ERP & Business Software",
            description: "Comprehensive Enterprise Resource Planning systems to streamline operations, finance, and HR management.",
            icon: <Building2 size={40} />,
            features: ["Workflow Automation", "Data Analytics", "Role-Based Access"]
        },
        {
            title: "E-Commerce Platforms",
            description: "Scalable online stores with secure payment gateways, inventory management, and intuitive user experiences.",
            icon: <ShoppingCart size={40} />,
            features: ["Payment Integration", "Inventory Management", "Admin Dashboard"]
        },
        {
            title: "Live Rate & Finance Systems",
            description: "Real-time data fetching systems for financial markets, gold/silver rates, and stock tracking dashboards.",
            icon: <TrendingUp size={40} />,
            features: ["WebSocket Integration", "Real-time Updates", "Data Visualization"]
        },
        {
            title: "Startup MVP Development",
            description: "Rapid prototyping and Minimum Viable Product development to help startups launch and validate ideas quickly.",
            icon: <Rocket size={40} />,
            features: ["Fast Turnaround", "Scalable Architecture", "Investor Ready"]
        },
        {
            title: "UI/UX Design",
            description: "User-centric design solutions that combine aesthetics with functionality for superior digital experiences.",
            icon: <Palette size={40} />,
            features: ["Wireframing", "Prototyping", "User Research"]
        },
        {
            title: "API & Backend Systems",
            description: "Robust and secure backend infrastructures, RESTful APIs, and database architecture for complex applications.",
            icon: <Server size={40} />,
            features: ["Node.js / Python", "Database Design", "Security Best Practices"]
        },
        {
            title: "Custom Business Software",
            description: "Tailor-made software solutions designed to address specific business challenges and operational bottlenecks.",
            icon: <Settings size={40} />,
            features: ["Custom Logic", "Legacy Integration", "Ongoing Support"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto"
        >
            <div className="text-center mb-20">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Our <span className="text-accent">Services</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                    Transforming ideas into digital reality with a comprehensive suite of technical services designed for growth and scalability.
                </p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {services.map((service, idx) => (
                    <motion.div key={idx} variants={item}>
                        <GlassCard className="h-full p-8 group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-8 border-t border-dashed border-white/10 pt-4">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                            <CheckCircle size={14} className="text-accent/50 group-hover:text-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    Get Started <ArrowRight size={16} />
                                </Link>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <GlassCard className="p-12 max-w-4xl mx-auto bg-gradient-to-r from-accent/10 via-transparent to-accent/10 border-accent/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Digitize Your Business?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Let's collaborate to build software that not only solves your problems but elevates your brand value.
                    </p>
                    <Link to="/contact" className="relative z-10 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-300">
                        Start a Conversation <ArrowRight size={18} />
                    </Link>
                </GlassCard>
            </motion.div>
        </motion.div>
    );
};

export default ServicesPage;
