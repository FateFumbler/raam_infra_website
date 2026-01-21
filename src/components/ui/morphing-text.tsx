import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MorphingTextProps {
    texts: string[];
    className?: string;
    interval?: number;
    colors?: string[];
}

export function MorphingText({
    texts,
    className = "",
    interval = 3000,
    colors = ["#00f3ff", "#22c55e", "#a855f7"]
}: MorphingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, interval);
        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <div className={`relative inline-block ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: colors[currentIndex % colors.length] }}
                    className="inline-block"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}

export default MorphingText;
