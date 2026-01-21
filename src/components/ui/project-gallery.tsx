import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Neo-Gen Roadways",
        category: "Smart Infrastructure",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
        description: "Self-healing asphalt concrete highways with integrated EV charging lanes.",
    },
    {
        title: "Ionic Retail Hub",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        description: "Net-zero shopping district powered by translucent solar glass facades.",
    },
    {
        title: "Integrated Aero-City",
        category: "Urban Planning",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
        description: "A seamless blend of residential zones and terminal logic for the future traveler.",
    },
];

export default function ProjectGallery() {
    return (
        <section id="projects" className="py-24 px-4 bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            Innovation driven by the desire to connect the connected future.
                        </p>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                        View All Projects
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] overflow-hidden rounded-2xl bg-gray-900 border border-white/10"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm line-clamp-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex items-center text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Learn More <ArrowUpRight className="ml-1 w-4 h-4" />
                                </div>
                            </div>

                            {/* Decorative border */}
                            <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
