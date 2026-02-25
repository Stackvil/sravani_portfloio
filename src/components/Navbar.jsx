import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/services' },
        { name: 'Clients', path: '/clients' },
        { name: 'Company', path: '/company' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-primary/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <HashLink smooth to="/#home" className="text-2xl font-bold tracking-tighter cursor-pointer group no-underline">
                    <span className="text-white">SRAVANI</span>
                    <span className="text-accent group-hover:text-white transition-colors">.DEV</span>
                </HashLink>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        item.path.startsWith('/#') ? (
                            <HashLink key={item.name} smooth to={item.path} className="text-sm font-medium text-gray-300 hover:text-accent transition-colors relative group">
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </HashLink>
                        ) : (
                            <Link key={item.name} to={item.path} className="text-sm font-medium text-gray-300 hover:text-accent transition-colors relative group">
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </Link>
                        )
                    ))}

                </div>

                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((item) => (
                                item.path.startsWith('/#') ? (
                                    <HashLink key={item.name} smooth to={item.path} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-accent">
                                        {item.name}
                                    </HashLink>
                                ) : (
                                    <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-accent">
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
