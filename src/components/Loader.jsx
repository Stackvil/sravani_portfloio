import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center">
                <motion.div
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.span
                        className="text-4xl font-bold text-white tracking-tighter"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        Sravani
                    </motion.span>
                    <motion.span
                        className="text-4xl font-bold text-accent tracking-tighter"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Teja
                    </motion.span>
                </motion.div>

                <motion.div
                    className="mt-4 h-1 bg-accent/20 rounded-full overflow-hidden w-32"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                >
                    <motion.div
                        className="h-full bg-accent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
