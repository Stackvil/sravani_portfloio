import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full delay-1000" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center"
            >
                <div className="mb-8 inline-flex p-6 rounded-3xl bg-white/5 border border-white/10 text-accent shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                    <ShieldAlert size={80} strokeWidth={1.5} />
                </div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">Lost in the Void</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg leading-relaxed">
                        The page you are looking for has been moved, deleted, or never existed in this dimension.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-lg hover:shadow-accent/50 hover:scale-105 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Security
                    </Link>
                </motion.div>
            </motion.div>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
    );
};

export default NotFound;
