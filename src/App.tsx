import ColorBends from './components/ui/color-bends'
import GooeyNav from './components/ui/gooey-nav'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { GradientText } from './components/ui/gradient-text'
import { TiltCard } from './components/ui/tilt-card'
import { AnimatedCounter } from './components/ui/animated-counter'
import { Spotlight } from './components/ui/spotlight'
import { Separator } from './components/ui/separator'

// Import images for service capabilities
import designPlanningImg from './assets/images/design_planning_icon_1770203604060.png'
import executionImg from './assets/images/execution_construction_1770203620482.png'
import financialImg from './assets/images/financial_strategy_1770203637085.png'
import techImg from './assets/images/tech_integration_1770203653002.png'
import stakeholderImg from './assets/images/stakeholder_trust_1770203669582.png'
import rendersImg from './assets/images/3d_renders_1770203686165.png'

function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll();

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    // Modal states
    const [showDigitalTwin, setShowDigitalTwin] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    const capabilities = [
        {
            title: 'Precision Design & Planning',
            desc: 'Comprehensive architectural and engineering design with master planning expertise for large-scale developments.',
            image: designPlanningImg,
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
        },
        {
            title: 'Execution Excellence',
            desc: 'End-to-end project execution with rigorous quality controls and timely delivery benchmarks.',
            image: executionImg,
            gradient: 'from-amber-500 via-orange-500 to-rose-500',
        },
        {
            title: 'Strategic Financial Structuring',
            desc: 'Financial modeling, investment structuring, and project financing solutions for infrastructure developments.',
            image: financialImg,
            gradient: 'from-emerald-500 via-green-500 to-teal-500',
        },
        {
            title: 'Intelligence-Driven Tech',
            desc: 'Smart infrastructure integration with IoT, automation, and data-driven decision systems.',
            image: techImg,
            gradient: 'from-purple-500 via-violet-500 to-indigo-500',
        },
        {
            title: 'Trusted Stakeholder Relations',
            desc: 'Building strong partnerships with government bodies, investors, and development authorities.',
            image: stakeholderImg,
            gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
        },
        {
            title: 'Immersive 3D Renders',
            desc: '3D isometric renders securing 100% regulatory approvals with photorealistic visualizations.',
            image: rendersImg,
            gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        }
    ];

    const metrics = [
        {
            label: 'Residential Master Plans',
            value: 5,
            suffix: 'M+ sq ft',
            sub: 'Developed Across India',
            color: '#00f3ff'
        },
        {
            label: 'Years of Experience',
            value: 17,
            suffix: '+',
            sub: 'Promoters\' Industry Expertise',
            color: '#22c55e'
        },
        {
            label: 'Projects Delivered',
            value: 7.5,
            suffix: 'M+ sq ft',
            sub: 'Residential Portfolio',
            color: '#a855f7'
        }
    ];

    return (
        <div ref={containerRef} className="relative min-h-screen text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden bg-gradient-to-br from-slate-950 to-slate-900">
            {/* Layered Backgrounds */}
            <div className="fixed inset-0 z-0">
                <ColorBends
                    speed={0.15}
                    scale={0.8}
                    warpStrength={1.2}
                    noise={0.05}
                    frequency={0.8}
                    autoRotate={2}
                    colors={['#00c3ff', '#ff00ff', '#ffff00', '#00ff88', '#8b5cf6']}
                    transparent={false}
                />
            </div>
            {/* FloatingParticles removed for cleaner background visibility */}

            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:px-12 backdrop-blur-xl bg-black/20 border-b border-white/5">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col"
                >
                    <span className="text-lg font-light tracking-wide uppercase">
                        RAAM Infrastructure
                    </span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-normal -mt-0.5">
                        & Developers LLP
                    </span>
                </motion.div>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2">
                        <GooeyNav items={navItems} initialActiveIndex={0} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </motion.button>

                {/* Spacer for desktop to balance layout */}
                <div className="hidden md:block w-[120px]" />
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-light text-white hover:text-cyan-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="relative z-10">
                {/* Hero Section */}
                <motion.section
                    ref={heroRef}
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-40"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-6xl"
                    >
                        {/* Pre-headline */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
                                RAAM Infrastructure & Developers LLP
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-4xl md:text-7xl lg:text-[80px] font-thin tracking-tight mb-8 leading-[1.2] pb-2"
                        >
                            <span className="block text-white/90">
                                Engineering India's
                            </span>
                            <span className="block">
                                <span className="italic font-light text-white">
                                    Airport
                                </span>
                                <span className="text-white/80">
                                    {" "}Future
                                </span>
                            </span>
                        </motion.h1>

                        {/* Sub-headline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-lg md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            From Residential Master Planning to Airport Development
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <Button
                                size="lg"
                                className="rounded-none border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-8 py-6 text-sm font-medium tracking-widest uppercase transition-all"
                                onClick={() => setShowDigitalTwin(true)}
                            >
                                <span className="mr-2 opacity-70">◈</span>
                                Digital Twin Explorer
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                className="rounded-none border-b border-white/30 px-8 py-6 text-sm font-medium tracking-widest uppercase hover:text-white/80"
                                onClick={() => setShowPortfolio(true)}
                            >
                                View Global Portfolio
                            </Button>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-20"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="flex flex-col items-center gap-2 text-white/30"
                            >
                                <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Capabilities Section */}
                <section id="capabilities" className="py-32 px-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />

                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-cyan-400">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-tight text-white">
                                Service Capabilities
                            </h2>
                            <p className="text-white/40 mt-4 max-w-2xl mx-auto text-lg">
                                Our comprehensive expertise spans the entire infrastructure development lifecycle.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {capabilities.map((capability, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <TiltCard
                                        className="h-full"
                                        tiltAmount={8}
                                        glareColor="rgba(6, 182, 212, 0.15)"
                                    >
                                        <Spotlight
                                            className="h-full"
                                            spotlightColor="rgba(6, 182, 212, 0.1)"
                                        >
                                            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-white/20 transition-all duration-500 h-full">
                                                <CardContent className="p-0 flex flex-col h-full relative">
                                                    {/* Image */}
                                                    <div className="w-full h-48 overflow-hidden">
                                                        <img
                                                            src={capability.image}
                                                            alt={capability.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>

                                                    <div className="p-6">
                                                        {/* Title */}
                                                        <h3 className={`text-xl font-semibold mb-3 tracking-tight text-white`}>
                                                            {capability.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <p className="text-white/40 leading-relaxed text-sm">
                                                            {capability.desc}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Spotlight>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-cyan-400">Who We Are</span>
                            <h2 className="text-4xl md:text-6xl font-light mt-4 tracking-tight text-white">
                                About Us
                            </h2>
                        </motion.div>

                        {/* Company Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto mb-16"
                        >
                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                                <p className="text-white/60 text-lg leading-relaxed text-center">
                                    <span className="text-white font-semibold">RAAM Infrastructure and Developers LLP</span> specializes in comprehensive real estate development with its promoters having a portfolio of <span className="text-cyan-400 font-semibold">7.5+ million sq ft</span> residential projects across India since 2009. With proven expertise from master planning to large-scale project execution, we are strategically expanding into <span className="text-cyan-400 font-semibold">airport infrastructure development</span>. Our residential success provides the perfect foundation for aviation opportunities.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-white/10 transition-all group overflow-hidden"
                                >
                                    <motion.div
                                        className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 tabular-nums break-words"
                                        style={{
                                            color: metric.color,
                                            textShadow: `0 0 40px ${metric.color}20`
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <AnimatedCounter
                                            target={metric.value}
                                            suffix={metric.suffix}
                                            duration={3}
                                            delay={idx * 300}
                                        />
                                    </motion.div>
                                    <div className="text-white/70 font-semibold text-sm mb-1 uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                    <div className="text-white/30 text-xs uppercase tracking-widest">
                                        {metric.sub}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                                Ready to Build the{' '}
                                <GradientText colors={["#00f3ff", "#a855f7", "#f59e0b", "#00f3ff"]}>
                                    Future?
                                </GradientText>
                            </h2>
                            <p className="text-white/50 text-lg mb-10">
                                Partner with us to create infrastructure that transforms communities and defines the next era of development.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-black hover:bg-white/90 px-10 py-7 text-lg font-bold"
                                >
                                    Start a Conversation
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full border-white/20 hover:bg-white/10 px-10 py-7 text-lg font-bold"
                                >
                                    Download Brochure
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="py-16 px-8 border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <span className="text-2xl font-semibold">
                                <GradientText colors={["#00f3ff", "#22c55e", "#a855f7", "#00f3ff"]}>
                                    RAAM Infrastructure
                                </GradientText>
                            </span>
                            <p className="text-white/40 mt-4 max-w-md leading-relaxed">
                                RAAM Infrastructure and Developers LLP specializes in comprehensive real estate development and airport infrastructure.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
                            <ul className="space-y-2 text-white/40">
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
                                <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a></li>
                                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
                            <ul className="space-y-2 text-white/40">
                                <li>
                                    <a href="mailto:contact@raaminfra.com" className="hover:text-cyan-400 transition-colors">
                                        contact@raaminfra.com
                                    </a>
                                </li>
                            </ul>
                            <p className="text-white/30 mt-4 text-sm">
                                For any queries, drop us an email.
                            </p>
                        </div>
                    </div>
                    <Separator className="bg-white/10 mb-8" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
                        <p>© 2026 RAAM Infrastructure and Developers LLP. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Digital Twin Explorer Modal */}
            <AnimatePresence>
                {showDigitalTwin && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
                        onClick={() => setShowDigitalTwin(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowDigitalTwin(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="p-8 pb-0">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                    Interactive Experience
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <GradientText colors={["#00f3ff", "#22c55e", "#a855f7", "#00f3ff"]}>
                                        Digital Twin Explorer
                                    </GradientText>
                                </h2>
                                <p className="text-white/60 text-lg">
                                    Experience our infrastructure projects through immersive 3D digital replicas.
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Feature Cards */}
                                {[
                                    { icon: "🌐", title: "Real-Time Monitoring", desc: "Live data feeds from IoT sensors across all infrastructure" },
                                    { icon: "🔮", title: "Predictive Analytics", desc: "AI-powered forecasting for maintenance and operations" },
                                    { icon: "🏗️", title: "3D Visualization", desc: "Navigate through photorealistic digital replicas" },
                                    { icon: "📊", title: "Performance Metrics", desc: "Track KPIs and sustainability metrics in real-time" }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
                                    >
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-white/50 text-sm">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="p-8 pt-0">
                                <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">Request Demo Access</h4>
                                            <p className="text-white/50">Experience our Digital Twin platform firsthand</p>
                                        </div>
                                        <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3">
                                            Schedule Demo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Portfolio Modal */}
            <AnimatePresence>
                {showPortfolio && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
                        onClick={() => setShowPortfolio(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950 border border-purple-500/30 shadow-2xl shadow-purple-500/20"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowPortfolio(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="p-8 pb-0">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                                    Global Presence
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <GradientText colors={["#a855f7", "#f59e0b", "#00f3ff", "#a855f7"]}>
                                        Global Portfolio
                                    </GradientText>
                                </h2>
                                <p className="text-white/60 text-lg">
                                    Explore our landmark infrastructure projects spanning 4 continents.
                                </p>
                            </div>

                            {/* Stats Row */}
                            <div className="px-8 py-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { value: "47", label: "Active Projects" },
                                        { value: "$12B", label: "Total Investment" },
                                        { value: "15", label: "Countries" },
                                        { value: "2M+", label: "Lives Impacted" }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                                        >
                                            <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                            <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Highlights */}
                            <div className="p-8 pt-0">
                                <h3 className="text-lg font-bold text-white mb-4">Featured Projects</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Northern Aero-Hub Terminal", location: "Singapore", status: "Operational", value: "$2.8B" },
                                        { name: "Atlantic Gateway Port", location: "Rotterdam, Netherlands", status: "Construction", value: "$1.5B" },
                                        { name: "Sahara Solar District", location: "Morocco", status: "Planning", value: "$890M" }
                                    ].map((project, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + i * 0.1 }}
                                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
                                        >
                                            <div>
                                                <h4 className="font-bold text-white">{project.name}</h4>
                                                <p className="text-white/50 text-sm">{project.location}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-purple-400 font-bold">{project.value}</div>
                                                <div className={`text-xs px-2 py-1 rounded-full ${project.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                                                    project.status === 'Construction' ? 'bg-amber-500/20 text-amber-400' :
                                                        'bg-blue-500/20 text-blue-400'
                                                    }`}>{project.status}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-8 pt-0">
                                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-purple-500/30">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">Download Full Portfolio</h4>
                                            <p className="text-white/50">Get detailed information on all our projects</p>
                                        </div>
                                        <Button className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-6 py-3">
                                            Download PDF
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

export default App
