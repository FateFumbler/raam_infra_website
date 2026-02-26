import ColorBends from './components/ui/color-bends'
import GooeyNav from './components/ui/gooey-nav'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { GradientText } from './components/ui/gradient-text'

import { AnimatedCounter } from './components/ui/animated-counter'

import { Separator } from './components/ui/separator'
import logoImg from './assets/images/logo.png'

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
            detail: 'Our design philosophy integrates cutting-edge urban planning methodologies with sustainable architecture principles. From initial concept through detailed engineering drawings, we ensure every project meets the highest standards of functionality, aesthetics, and regulatory compliance. Our team coordinates across disciplines to deliver cohesive master plans that maximize land utilization while creating livable, future-ready communities.',
            highlights: ['Master Planning', 'Architectural Design', 'Regulatory Compliance', 'Sustainable Design'],
            image: designPlanningImg,
            gradient: 'from-blue-500 via-cyan-500 to-teal-500',
        },
        {
            title: 'Execution Excellence',
            desc: 'End-to-end project execution with rigorous quality controls and timely delivery benchmarks.',
            detail: 'With a proven track record of delivering over 7.5 million sq ft of residential developments, our execution capabilities are built on decades of hands-on experience. We employ advanced project management frameworks, real-time progress tracking, and multi-tier quality assurance processes to ensure every milestone is met on time and within budget. Safety and sustainability remain at the core of every construction phase.',
            highlights: ['Quality Assurance', 'Timeline Management', 'Safety Protocols', 'Budget Control'],
            image: executionImg,
            gradient: 'from-amber-500 via-orange-500 to-rose-500',
        },
        {
            title: 'Strategic Financial Structuring',
            desc: 'Financial modeling, investment structuring, and project financing solutions for infrastructure developments.',
            detail: 'Infrastructure development demands sophisticated financial planning. Our team crafts tailored financial models, secures strategic funding partnerships, and structures investments to optimize returns while minimizing risk exposure. From public-private partnerships to institutional financing, we navigate the complex financial landscape to bring ambitious projects to life with sustainable capital strategies.',
            highlights: ['Financial Modeling', 'Investment Structuring', 'PPP Frameworks', 'Risk Management'],
            image: financialImg,
            gradient: 'from-emerald-500 via-green-500 to-teal-500',
        },
        {
            title: 'Intelligence-Driven Tech',
            desc: 'Smart infrastructure integration with IoT, automation, and data-driven decision systems.',
            detail: 'We harness the power of emerging technologies to build intelligent infrastructure ecosystems. Our solutions incorporate IoT sensor networks, AI-powered analytics platforms, and automated building management systems that transform static structures into responsive, data-driven environments. From smart energy grids to predictive maintenance systems, technology is embedded into the fabric of every development.',
            highlights: ['IoT Integration', 'AI Analytics', 'Smart Systems', 'Predictive Maintenance'],
            image: techImg,
            gradient: 'from-purple-500 via-violet-500 to-indigo-500',
        },
        {
            title: 'Trusted Stakeholder Relations',
            desc: 'Building strong partnerships with government bodies, investors, and development authorities.',
            detail: 'Successful infrastructure projects require trust and collaboration across multiple stakeholders. We have cultivated deep relationships with government agencies, regulatory bodies, financial institutions, and community organizations. Our transparent communication approach and proven delivery track record ensure alignment of interests, smooth approvals, and sustained support throughout the project lifecycle.',
            highlights: ['Government Liaison', 'Investor Relations', 'Community Engagement', 'Regulatory Navigation'],
            image: stakeholderImg,
            gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
        },
        {
            title: 'Immersive 3D Renders',
            desc: '3D isometric renders securing 100% regulatory approvals with photorealistic visualizations.',
            detail: 'Our visualization studio produces stunning photorealistic 3D renders and isometric views that bring projects to life before a single brick is laid. These detailed visualizations serve as powerful tools for investor presentations, marketing campaigns, and regulatory submissions — achieving a 100% approval rate. Interactive walkthroughs and aerial perspectives allow stakeholders to experience the final product in vivid detail.',
            highlights: ['Photorealistic Renders', 'Interactive Walkthroughs', 'Aerial Perspectives', 'Investor Presentations'],
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
        <div ref={containerRef} className="relative min-h-screen text-slate-800 font-sans selection:bg-cyan-500/30 overflow-x-hidden bg-gradient-to-br from-stone-100 to-gray-200">
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
                    transparent={true}
                />
            </div>
            {/* FloatingParticles removed for cleaner background visibility */}

            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:px-12 backdrop-blur-xl bg-stone-200/80 border-b border-stone-300/50 shadow-sm">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                >
                    <img src={logoImg} alt="RAAM Infrastructure & Developers LLP" className="h-14 md:h-20 w-auto drop-shadow-md" />
                </motion.div>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2">
                        <GooeyNav items={navItems} initialActiveIndex={0} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors text-slate-700"
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
                        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-light text-slate-700 hover:text-slate-900 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors text-slate-700"
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
                    className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-48"
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
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-200/80 border border-gray-300 backdrop-blur-xl mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-600"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                                RAAM Infrastructure & Developers LLP
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-4xl md:text-7xl lg:text-[80px] font-thin tracking-tight mb-8 leading-[1.2] pb-2"
                        >
                            <span className="block text-slate-800">
                                Engineering India's
                            </span>
                            <span className="block">
                                <span className="italic font-light text-slate-900">
                                    Airport
                                </span>
                                <span className="text-slate-600">
                                    {" "}Future
                                </span>
                            </span>
                        </motion.h1>

                        {/* Sub-headline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-lg md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
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
                                className="rounded-none border border-slate-400 bg-stone-600 backdrop-blur-md text-white hover:bg-stone-700 px-10 py-6 text-sm font-medium tracking-widest uppercase transition-all shadow-lg"
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
                                className="flex flex-col items-center gap-2 text-slate-400"
                            >
                                <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Spacer */}
                <div className="h-16" />

                {/* Capabilities Section */}
                <section id="capabilities" className="py-32 px-4 relative">

                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-gray-500">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-tight text-slate-800">
                                Service Capabilities
                            </h2>
                            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                                Our comprehensive expertise spans the entire infrastructure development lifecycle.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-6">
                            {capabilities.map((capability, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-white/30 border-white/40 backdrop-blur-sm overflow-hidden hover:bg-white/45 transition-all duration-400 shadow-sm hover:shadow-md">
                                        <CardContent className="p-5">
                                            <div className="flex gap-5">
                                                {/* Image */}
                                                <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                                                    <img
                                                        src={capability.image}
                                                        alt={capability.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base font-semibold mb-1 tracking-tight text-slate-800">
                                                        {capability.title}
                                                    </h3>
                                                    <p className="text-slate-500 leading-relaxed text-xs mb-2">
                                                        {capability.desc}
                                                    </p>
                                                    <p className="text-slate-400 leading-relaxed text-[11px] mb-3">
                                                        {capability.detail}
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {capability.highlights.map((tag, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2 py-0.5 rounded-full bg-white/40 border border-stone-200/50 text-[10px] font-medium text-stone-500 tracking-wide"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="py-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/10 via-transparent to-gray-300/10 pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-gray-500">Who We Are</span>
                            <h2 className="text-4xl md:text-6xl font-light mt-4 tracking-tight text-slate-800">
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
                            <div className="p-8 rounded-2xl bg-white/60 border border-gray-200 backdrop-blur-md shadow-sm">
                                <p className="text-slate-600 text-lg leading-relaxed text-center">
                                    <span className="text-slate-800 font-semibold">RAAM Infrastructure and Developers LLP</span> specializes in comprehensive real estate development with its promoters having a portfolio of <span className="text-slate-900 font-semibold">7.5+ million sq ft</span> residential projects across India since 2009. With proven expertise from master planning to large-scale project execution, we are strategically expanding into <span className="text-slate-900 font-semibold">airport infrastructure development</span>. Our residential success provides the perfect foundation for aviation opportunities.
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
                                    className="text-center p-6 md:p-8 rounded-3xl bg-white/60 border border-gray-200 backdrop-blur-xl hover:border-gray-400 transition-all group overflow-hidden shadow-sm"
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
                                    <div className="text-slate-700 font-semibold text-sm mb-1 uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                    <div className="text-slate-400 text-xs uppercase tracking-widest">
                                        {metric.sub}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News & Social Media Section */}
                <section id="news" className="py-32 px-4 relative">
                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-gray-500">Stay Connected</span>
                            <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-tight text-slate-800">
                                News & Social
                            </h2>
                            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                                Follow our journey and stay updated with the latest developments.
                            </p>
                        </motion.div>

                        {/* Latest News */}
                        <div className="mb-16">
                            <h3 className="text-lg font-semibold text-slate-700 mb-6 tracking-wide uppercase">Latest Updates</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        date: 'Feb 2026',
                                        title: 'RAAM Infrastructure Expands into Airport Development',
                                        excerpt: 'Leveraging 15+ years of residential construction expertise, RAAM Infrastructure announces strategic entry into aviation infrastructure, targeting emerging airport projects across India.',
                                        category: 'Company News'
                                    },
                                    {
                                        date: 'Jan 2026',
                                        title: 'Milestone: 7.5 Million Sq Ft Residential Portfolio',
                                        excerpt: 'RAAM Infrastructure celebrates the completion of its residential development milestone, having successfully delivered over 7.5 million sq ft of quality housing since 2009.',
                                        category: 'Milestone'
                                    },
                                    {
                                        date: 'Dec 2025',
                                        title: '3D Visualization Studio Achieves 100% Approval Rate',
                                        excerpt: 'Our in-house 3D isometric rendering studio has maintained a perfect regulatory approval track record, streamlining project timelines significantly.',
                                        category: 'Innovation'
                                    }
                                ].map((news, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="bg-white/30 border-white/40 backdrop-blur-sm overflow-hidden hover:bg-white/45 transition-all duration-400 shadow-sm hover:shadow-md h-full">
                                            <CardContent className="p-5 flex flex-col h-full">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">{news.date}</span>
                                                    <span className="px-2 py-0.5 rounded-full bg-white/40 border border-stone-200/50 text-[10px] font-medium text-stone-500">{news.category}</span>
                                                </div>
                                                <h4 className="text-sm font-semibold text-slate-800 mb-2 leading-snug">{news.title}</h4>
                                                <p className="text-slate-500 text-xs leading-relaxed flex-1">{news.excerpt}</p>
                                                <div className="mt-4 pt-3 border-t border-stone-200/30">
                                                    <span className="text-xs font-medium text-stone-500 hover:text-stone-700 cursor-pointer transition-colors">Read More →</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-slate-700 mb-6 tracking-wide uppercase">Follow Us</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    {
                                        name: 'LinkedIn',
                                        handle: '@raam-infrastructure',
                                        followers: '12.5K',
                                        color: '#0A66C2',
                                        icon: (
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        name: 'Instagram',
                                        handle: '@raam.infra',
                                        followers: '8.2K',
                                        color: '#E4405F',
                                        icon: (
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        name: 'X (Twitter)',
                                        handle: '@raam_infra',
                                        followers: '5.1K',
                                        color: '#000000',
                                        icon: (
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        name: 'YouTube',
                                        handle: '@RAAMInfra',
                                        followers: '3.8K',
                                        color: '#FF0000',
                                        icon: (
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        )
                                    }
                                ].map((social, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="bg-white/30 border-white/40 backdrop-blur-sm overflow-hidden hover:bg-white/45 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group">
                                            <CardContent className="p-5 text-center">
                                                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/50 group-hover:bg-white/70 transition-colors" style={{ color: social.color }}>
                                                    {social.icon}
                                                </div>
                                                <h4 className="text-sm font-semibold text-slate-800 mb-0.5">{social.name}</h4>
                                                <p className="text-[11px] text-slate-400 mb-2">{social.handle}</p>
                                                <p className="text-lg font-bold text-slate-700 mb-3">{social.followers} <span className="text-[10px] font-normal text-slate-400 uppercase">followers</span></p>
                                                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium border transition-colors"
                                                    style={{ borderColor: social.color + '40', color: social.color }}
                                                >
                                                    Follow
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-40 relative">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-800">
                                Ready to Build the{' '}
                                <GradientText colors={["#00f3ff", "#a855f7", "#f59e0b", "#00f3ff"]}>
                                    Future?
                                </GradientText>
                            </h2>
                            <p className="text-slate-500 text-lg mb-10">
                                Partner with us to create infrastructure that transforms communities and defines the next era of development.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-stone-600 text-white hover:bg-stone-700 px-10 py-7 text-lg font-bold shadow-lg"
                                >
                                    Start a Conversation
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="py-16 px-8 border-t border-gray-300 relative z-10 bg-gray-100/80 backdrop-blur-xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <span className="text-2xl font-semibold">
                                <GradientText colors={["#00f3ff", "#22c55e", "#a855f7", "#00f3ff"]}>
                                    RAAM Infrastructure
                                </GradientText>
                            </span>
                            <p className="text-slate-500 mt-4 max-w-md leading-relaxed">
                                RAAM Infrastructure and Developers LLP specializes in comprehensive real estate development and airport infrastructure.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
                            <ul className="space-y-2 text-slate-500">
                                <li><a href="#" className="hover:text-slate-800 transition-colors">Home</a></li>
                                <li><a href="#capabilities" className="hover:text-slate-800 transition-colors">Capabilities</a></li>
                                <li><a href="#about" className="hover:text-slate-800 transition-colors">About Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
                            <ul className="space-y-2 text-slate-500">
                                <li>
                                    <a href="mailto:contact@raaminfra.com" className="hover:text-slate-800 transition-colors">
                                        contact@raaminfra.com
                                    </a>
                                </li>
                            </ul>
                            <p className="text-slate-400 mt-4 text-sm">
                                For any queries, drop us an email.
                            </p>
                        </div>
                    </div>
                    <Separator className="bg-gray-300 mb-8" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
                        <p>© 2026 RAAM Infrastructure and Developers LLP. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>


            {/* Global Portfolio Modal */}
            <AnimatePresence>
                {showPortfolio && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl"
                        onClick={() => setShowPortfolio(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-300 shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowPortfolio(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10 text-slate-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="p-8 pb-0">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 border border-gray-300 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                                    Global Presence
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <GradientText colors={["#a855f7", "#f59e0b", "#00f3ff", "#a855f7"]}>
                                        Global Portfolio
                                    </GradientText>
                                </h2>
                                <p className="text-slate-500 text-lg">
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
                                            className="text-center p-4 rounded-xl bg-gray-100 border border-gray-200"
                                        >
                                            <div className="text-2xl md:text-3xl font-black text-slate-800">{stat.value}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Highlights */}
                            <div className="p-8 pt-0">
                                <h3 className="text-lg font-bold text-slate-800 mb-4">Featured Projects</h3>
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
                                            className="flex items-center justify-between p-4 rounded-xl bg-gray-100 border border-gray-200 hover:border-gray-400 transition-all"
                                        >
                                            <div>
                                                <h4 className="font-bold text-slate-800">{project.name}</h4>
                                                <p className="text-slate-500 text-sm">{project.location}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-slate-700 font-bold">{project.value}</div>
                                                <div className={`text-xs px-2 py-1 rounded-full ${project.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                                                    project.status === 'Construction' ? 'bg-amber-500/20 text-amber-400' :
                                                        'bg-blue-500/20 text-blue-400'
                                                    }`}>{project.status}</div>
                                            </div>
                                        </motion.div>
                                    ))}
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
