import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"], .interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="hidden lg:block fixed inset-0 pointer-events-none z-[9999]">
            {/* Main Cursor Dot */}
            <motion.div
                className="w-2 h-2 bg-accent shadow-[0_0_10px_#00f5ff] rounded-full fixed top-0 left-0"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 2 : 1
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
            />

            {/* Outer Ring */}
            <motion.div
                className="w-8 h-8 border border-magenta/50 rounded-full fixed top-0 left-0"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 1 : 0.5
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
            />
        </div>
    );
};

export default CustomCursor;
