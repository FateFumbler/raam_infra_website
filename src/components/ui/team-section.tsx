import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

// Simple Avatar component inline if not available standard
function SimpleAvatar({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
    return (
        <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary ring-4 ring-primary/20 mx-auto mb-4">
            <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
    );
}

const teamMembers = [
    {
        name: "Eleanor Tresh",
        role: "Chief Architect",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Michael Chen",
        role: "Head of Infrastructure",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Sarah Jenkins",
        role: "Sustainability Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="relative py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                        Our Expertise
                    </h2>
                    <Separator className="w-24 mx-auto bg-primary/50 mb-8" />

                    {/* Hero Team Image mimicking the reference */}
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-16 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                            alt="Engineering Team"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-10 left-10 z-20 max-w-2xl text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Crafting Tomorrow's Foundations</h3>
                            <p className="text-gray-300">
                                Our multidisciplinary team of engineers, architects, and visionaries work in unison to deliver infrastructure that stands the test of time.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <SimpleAvatar src={member.image} alt={member.name} fallback={member.name[0]} />
                            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider mt-1">
                                {member.role}
                            </p>
                            <div className="w-0 group-hover:w-full h-0.5 bg-primary mt-4 transition-all duration-300 mx-auto max-w-[50px]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
