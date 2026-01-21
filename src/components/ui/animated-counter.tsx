import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    decimals?: number;
    delay?: number;
}

export function AnimatedCounter({
    target,
    duration = 2,
    suffix = "",
    prefix = "",
    className = "",
    decimals = 0,
    delay = 0
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasStarted, setHasStarted] = useState(false);

    const spring = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000
    });

    const display = useTransform(spring, (current) => {
        return decimals > 0
            ? current.toFixed(decimals)
            : Math.floor(current).toLocaleString();
    });

    useEffect(() => {
        if (isInView && !hasStarted) {
            const timeout = setTimeout(() => {
                spring.set(target);
                setHasStarted(true);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [isInView, target, spring, hasStarted, delay]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

export default AnimatedCounter;
