import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
    glareColor?: string;
    showGlare?: boolean;
}

export function TiltCard({
    children,
    className = "",
    tiltAmount = 15,
    glareColor = "rgba(0, 243, 255, 0.15)",
    showGlare = true
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), { stiffness: 300, damping: 30 });

    const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
    const glareY = useTransform(y, [0, 1], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ scale: { duration: 0.3 } }}
        >
            {children}
            {showGlare && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, ${glareColor}, transparent 50%)`,
                        transform: "translateZ(50px)",
                    }}
                />
            )}
        </motion.div>
    );
}

export default TiltCard;
