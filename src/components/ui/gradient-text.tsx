import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export function GradientText({
    children,
    className = "",
    colors = ["#00f3ff", "#5eead4", "#22c55e", "#00f3ff"],
    animationSpeed = 8,
    showBorder = false
}: GradientTextProps) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "300%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
    };

    return (
        <motion.span
            className={`inline-block ${className}`}
            style={gradientStyle}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: animationSpeed,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {children}
        </motion.span>
    );
}

export default GradientText;
