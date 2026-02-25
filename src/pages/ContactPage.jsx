import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const ContactPage = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: '', email: '', phone: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-20 px-6 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Let’s Build Something <span className="text-accent">Powerful</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Ready to transform your business with cutting-edge technology?
                        Reach out to Stackvil Technologies and let's start the conversation.
                    </p>

                    <div className="space-y-6">
                        <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Call Us</h3>
                                <p className="text-white text-lg font-semibold">+91 79814 35392</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">WhatsApp</h3>
                                <p className="text-white text-lg font-semibold">Chat with us</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Email</h3>
                                <p className="text-white text-lg font-semibold">lakamuthotisravani@gmail.com</p>
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <GlassCard className="p-8 md:p-10 border-accent/20">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="flex flex-col items-center justify-center text-center py-20"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Message Sent!</h2>
                                    <p className="text-gray-400 mb-8">We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-accent hover:text-white font-medium transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400 ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                                placeholder="+91 ..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-accent hover:bg-white hover:text-black text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </GlassCard>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
