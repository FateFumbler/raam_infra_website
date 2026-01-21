import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    spotlightSize?: number;
}

export function Spotlight({
    children,
    className = "",
    spotlightColor = "rgba(0, 243, 255, 0.15)",
    spotlightSize = 400
}: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    width: spotlightSize,
                    height: spotlightSize,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
                    left: position.x - spotlightSize / 2,
                    top: position.y - spotlightSize / 2,
                }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
            />
            {children}
        </div>
    );
}

export default Spotlight;
