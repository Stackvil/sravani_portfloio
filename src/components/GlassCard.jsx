import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const GlassCard = ({ children, className }) => (
    <div className={cn("backdrop-blur-xl bg-card border border-white/5 rounded-2xl shadow-xl shadow-black/20 hover:border-accent/40 transition-colors duration-500", className)}>
        {children}
    </div>
);

export default GlassCard;
