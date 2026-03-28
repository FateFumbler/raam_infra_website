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

// Section images
import strategicPlanningImg from './assets/images/strategic_planning.png'
import executionDisciplineImg from './assets/images/execution_discipline.png'
import designIntelligenceImg from './assets/images/design_intelligence.png'
import masterPlanningImg from './assets/images/master_planning.png'
import residentialImg from './assets/images/residential_development.png'
import financialImg from './assets/images/financial_structuring.png'
import regulatoryImg from './assets/images/regulatory_compliance.png'
import aboutCorporateImg from './assets/images/about_corporate.png'
import projectExperienceImg from './assets/images/project_experience.png'
import industryForumImg from './assets/images/industry_forum.png'

function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll();

    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedCapability, setExpandedCapability] = useState<number | null>(null);

    const navItems = [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Experience", href: "#experience" },
        { label: "News", href: "#news" },
        { label: "Contact", href: "#contact" },
    ];

    const credibilityHighlights = [
        { value: '17+', label: 'Years Promoter Experience' },
        { value: '7.5M+', label: 'Sq Ft Residential Portfolio' },
        { value: '✓', label: 'Integrated Township Planning' },
        { value: '✓', label: 'Compliance Framework' },
    ];

    const coreStrengths = [
        {
            title: 'Strategic Development Planning',
            desc: 'Comprehensive land assessment, phased modeling, and optimized land-use planning aligned with regulatory frameworks.',
            image: strategicPlanningImg,
        },
        {
            title: 'Execution Discipline',
            desc: 'Structured vendor management, milestone-based monitoring, and capital efficiency across development cycles.',
            image: executionDisciplineImg,
        },
        {
            title: 'Design & Planning Intelligence',
            desc: '3D visualization systems, compliance-led planning, and simulation-driven master planning.',
            image: designIntelligenceImg,
        },
    ];

    const capabilities = [
        {
            title: 'Integrated Master Planning',
            desc: 'Our planning approach aligns design, compliance, and monetization strategy from inception.',
            bullets: ['Large parcel land planning and zoning optimization', 'Phased township modeling', 'Infrastructure layout design', 'Utility and circulation planning', 'Amenity and ecosystem integration'],
            image: masterPlanningImg,
        },
        {
            title: 'Residential & Urban Development',
            desc: 'We focus on scalable, livable, and regulatory-aligned development models.',
            bullets: ['Mid-rise and high-rise development models', 'Integrated township ecosystems', 'Mixed-use cluster planning', 'Community-centric residential layouts', 'Infrastructure-supported housing models'],
            image: residentialImg,
        },
        {
            title: 'Development Structuring & Financial Planning',
            desc: 'Our development approach integrates financial discipline with execution realism.',
            bullets: ['Feasibility analysis and viability assessment', 'Phased capital allocation strategy', 'Risk modeling and mitigation frameworks', 'Cost optimization planning', 'Lifecycle asset modeling'],
            image: financialImg,
        },
        {
            title: 'Regulatory & Approval Strategy',
            desc: 'Regulatory readiness is embedded into every stage of our planning process.',
            bullets: ['Land-use compliance strategy', 'Coordination with statutory authorities', 'Documentation and submission frameworks', 'Approval-driven planning models', 'Environmental and zoning alignment'],
            image: regulatoryImg,
        },
        {
            title: 'Execution & Delivery Oversight',
            desc: 'Execution is monitored through structured and measurable control systems.',
            bullets: ['Contractor and consultant integration', 'Project milestone tracking systems', 'Budget monitoring frameworks', 'Quality assurance protocols', 'Vendor management structure'],
            image: executionDisciplineImg,
        },
        {
            title: 'Design & Visualization Intelligence',
            desc: 'Visualization tools enhance clarity, stakeholder alignment, and approval efficiency.',
            bullets: ['3D master planning renders', 'Phased development simulations', 'Layout optimization models', 'Regulatory presentation drawings'],
            image: designIntelligenceImg,
        },
    ];

    const governanceItems = [
        'Defined capital contribution framework',
        'Structured profit-sharing mechanism',
        'Clearly demarcated management authority',
        'LLP Act compliant governance',
        'Formal arbitration and dispute resolution mechanism',
        'Transparent accounting and audit systems',
    ];

    const lifecycleSteps = [
        { step: '01', title: 'Land Strategy & Feasibility' },
        { step: '02', title: 'Master Planning & Concept Modeling' },
        { step: '03', title: 'Regulatory Alignment & Approvals' },
        { step: '04', title: 'Phased Execution & Delivery' },
        { step: '05', title: 'Stabilization & Asset Monetization' },
    ];

    const metrics = [
        { label: 'Residential Portfolio', value: 7.5, suffix: 'M+ sq ft', sub: 'Delivered Since 2009', color: '#00f3ff' },
        { label: 'Promoter Experience', value: 17, suffix: '+ Years', sub: 'Industry Expertise', color: '#22c55e' },
        { label: 'Residential Master Plans', value: 5, suffix: 'M+ sq ft', sub: 'Across India', color: '#a855f7' },
    ];

    return (
        <div ref={containerRef} className="relative min-h-screen text-slate-800 font-sans selection:bg-cyan-500/30 overflow-x-hidden bg-stone-50">
            {/* Layered Background */}
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

            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2 px-4 md:px-10 backdrop-blur-xl bg-stone-200/80 border-b border-stone-300/50 shadow-sm">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
                    <img src={logoImg} alt="RAAM Infrastructure & Developers LLP" className="h-10 md:h-14 w-auto drop-shadow-md" />
                </motion.div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2">
                        <GooeyNav items={navItems} initialActiveIndex={0} />
                    </div>
                </div>
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
                {/* ===== 1. HOME / HERO ===== */}
                <motion.section
                    ref={heroRef}
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-32 relative"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-6xl relative z-10"
                    >
                        {/* Pre-headline badge */}
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

                        {/* Headline */}
                        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.2]">
                            <span className="block text-slate-800">Building Integrated</span>
                            <span className="block">
                                <span className="italic font-light text-slate-900">Infrastructure</span>
                                <span className="text-slate-600"> for Tomorrow's</span>
                            </span>
                            <span className="block text-slate-700">Urban India</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-base md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            RAAM Infrastructure Developers LLP is a multidisciplinary development platform focused on master planning, structured real estate development, and infrastructure-led growth across emerging urban corridors.
                        </motion.p>

                        {/* Credibility Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12"
                        >
                            {credibilityHighlights.map((item, idx) => (
                                <div key={idx} className="px-4 py-3 rounded-xl bg-white/50 border border-gray-200/80 backdrop-blur-sm">
                                    <div className="text-xl font-bold text-slate-800">{item.value}</div>
                                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">{item.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-8"
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

                {/* Positioning Statement */}
                <section className="py-20 px-4 relative">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-2xl bg-white/50 border border-gray-200 backdrop-blur-md shadow-sm"
                        >
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                <span className="text-slate-800 font-semibold">RAAM Infrastructure Developers LLP</span> combines execution depth with disciplined project structuring. Our approach integrates land intelligence, regulatory planning, financial modeling, and phased development strategies to create scalable and sustainable built environments.
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                We operate with institutional governance standards, defined capital structure, and a long-term asset development perspective.
                            </p>
                        </motion.div>

                        {/* Core Strengths - 3 Column */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {coreStrengths.map((strength, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-white/40 border-gray-200/80 backdrop-blur-sm overflow-hidden hover:bg-white/60 transition-all duration-400 shadow-sm hover:shadow-lg h-full group">
                                        <div className="w-full h-48 overflow-hidden">
                                            <img src={strength.image} alt={strength.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-semibold text-slate-800 mb-2">{strength.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{strength.desc}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== 2. ABOUT RAAM ===== */}
                <section id="about" className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-gray-500">About RAAM</span>
                            <h2 className="text-3xl md:text-5xl font-light mt-4 tracking-tight text-slate-800 leading-tight">
                                Institutional Structure.<br className="hidden md:block" /> Execution Depth. Long-Term Vision.
                            </h2>
                        </motion.div>

                        {/* Corporate Overview with image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img src={aboutCorporateImg} alt="RAAM Infrastructure Corporate" className="w-full h-full object-cover min-h-[300px]" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col justify-center"
                            >
                                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Corporate Overview</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    RAAM Infrastructure Developers LLP is incorporated under the Limited Liability Partnership Act, 2008, with a structured governance and capital framework designed for scalable infrastructure development.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    The promoters bring over 17 years of industry experience across residential master planning and integrated township execution. Since 2009, the promoter-led portfolio has conceptualized, planned, and delivered over 7.5 million square feet of residential developments across India.
                                </p>
                                <p className="text-slate-500 leading-relaxed">
                                    RAAM operates with a disciplined capital contribution structure, defined management authority, and compliance-backed operational processes. The LLP framework ensures clarity in decision-making, accountability, and long-term continuity.
                                </p>
                            </motion.div>
                        </div>

                        {/* Governance & Compliance */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto mb-16"
                        >
                            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Governance & Compliance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {governanceItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.08 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/50 border border-gray-200/80 backdrop-blur-sm"
                                    >
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm text-slate-600">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Vision & Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/50 border border-gray-200 backdrop-blur-md"
                            >
                                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-sm">◎</span>
                                    Vision
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    To develop sustainable, scalable infrastructure assets that integrate design intelligence, regulatory alignment, and disciplined capital deployment.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/50 border border-gray-200 backdrop-blur-md"
                            >
                                <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm">◈</span>
                                    Mission
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    To create value-driven built environments through structured planning, efficient execution, and long-term asset perspective.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== 3. INFRASTRUCTURE CAPABILITIES ===== */}
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
                                Integrated Development Capabilities
                            </h2>
                        </motion.div>

                        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
                            {capabilities.map((capability, idx) => {
                                const isExpanded = expandedCapability === idx;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card
                                            className="bg-white/30 border-white/40 backdrop-blur-sm overflow-hidden hover:bg-white/45 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                                            onClick={() => setExpandedCapability(isExpanded ? null : idx)}
                                        >
                                            <CardContent className="p-5">
                                                <div className="flex gap-4">
                                                    {/* Image */}
                                                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                        <img src={capability.image} alt={capability.title} className="w-full h-full object-cover" />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <div>
                                                                <h3 className="text-sm font-semibold tracking-tight text-slate-800">{capability.title}</h3>
                                                                <p className="text-slate-500 leading-relaxed text-xs mt-1">{capability.desc}</p>
                                                            </div>
                                                            <motion.svg
                                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1"
                                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </motion.svg>
                                                        </div>

                                                        <AnimatePresence>
                                                            {isExpanded && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <ul className="mt-3 mb-2 space-y-1.5">
                                                                        {capability.bullets.map((bullet, i) => (
                                                                            <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                                                                                {bullet}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ===== 4. PROJECT EXPERIENCE ===== */}
                <section id="experience" className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-gray-500">Track Record</span>
                            <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-tight text-slate-800">
                                Execution Track Record
                            </h2>
                        </motion.div>

                        {/* Hero Image Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-6xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className="relative h-64 md:h-80">
                                <img src={projectExperienceImg} alt="Project Experience" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { val: '7.5M+', lbl: 'Sq Ft Portfolio' },
                                            { val: 'Multi', lbl: 'Phase Townships' },
                                            { val: 'Large', lbl: 'Scale Clusters' },
                                            { val: 'Urban', lbl: 'Corridors' },
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-xl md:text-2xl font-bold text-white">{stat.val}</div>
                                                <div className="text-[10px] text-white/70 uppercase tracking-wider">{stat.lbl}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
                                        style={{ color: metric.color }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <AnimatedCounter target={metric.value} suffix={metric.suffix} duration={3} delay={idx * 300} />
                                    </motion.div>
                                    <div className="text-slate-700 font-semibold text-sm mb-1 uppercase tracking-wider">{metric.label}</div>
                                    <div className="text-slate-400 text-xs uppercase tracking-widest">{metric.sub}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Promoter Experience & Lifecycle */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Promoter Experience */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/50 border border-gray-200 backdrop-blur-md"
                            >
                                <h3 className="text-lg font-semibold text-slate-800 mb-5">Promoter Experience (Since 2009)</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Land aggregation and master planning',
                                        'High-rise and mid-rise residential developments',
                                        'Infrastructure-linked housing ecosystems',
                                        'Phased construction and delivery models',
                                        'Monetization-driven planning strategy',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Structured Development Lifecycle */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/50 border border-gray-200 backdrop-blur-md"
                            >
                                <h3 className="text-lg font-semibold text-slate-800 mb-5">Structured Development Lifecycle</h3>
                                <div className="space-y-4">
                                    {lifecycleSteps.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4"
                                        >
                                            <span className="w-10 h-10 rounded-full bg-gradient-to-r from-stone-600 to-stone-800 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                {step.step}
                                            </span>
                                            <span className="text-slate-700 text-sm font-medium">{step.title}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-slate-500 text-xs mt-5 italic">This lifecycle ensures clarity, risk management, and capital efficiency.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ===== 5. NEWS & MEDIA ===== */}
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
                                News, Updates & Industry Engagement
                            </h2>
                        </motion.div>

                        {/* Corporate Updates with image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-semibold text-slate-800 mb-4">Corporate Updates</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    RAAM Infrastructure Developers LLP regularly engages with industry stakeholders, regulatory authorities, consultants, and strategic partners to enhance development capabilities and align with emerging infrastructure opportunities.
                                </p>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Updates regarding corporate developments, project milestones, partnerships, and regulatory approvals will be shared in this section.
                                </p>

                                <h3 className="text-lg font-semibold text-slate-800 mb-4 mt-8">Industry Participation</h3>
                                <ul className="space-y-2">
                                    {[
                                        'Infrastructure and urban development forums',
                                        'Industry consultations and policy discussions',
                                        'Regulatory engagement sessions',
                                        'Professional development and sector conferences',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img src={industryForumImg} alt="Industry Forum" className="w-full h-full object-cover min-h-[300px]" />
                            </motion.div>
                        </div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-6xl mx-auto"
                        >
                            <h3 className="text-lg font-semibold text-slate-700 mb-3 text-center">Social Media & Communication</h3>
                            <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto text-sm">
                                Stay connected with RAAM Infrastructure Developers LLP through our official communication channels for updates on development insights, industry perspectives, and corporate milestones.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    {
                                        name: 'LinkedIn', handle: '@raam-infrastructure', color: '#0A66C2',
                                        icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    },
                                    {
                                        name: 'Instagram', handle: '@raam.infra', color: '#E4405F',
                                        icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                    },
                                    {
                                        name: 'X (Twitter)', handle: '@raam_infra', color: '#000000',
                                        icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    },
                                    {
                                        name: 'YouTube', handle: '@RAAMInfra', color: '#FF0000',
                                        icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    },
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
                                                <p className="text-[11px] text-slate-400 mb-3">{social.handle}</p>
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

                {/* ===== 6. CONTACT CTA ===== */}
                <section id="contact-cta" className="py-32 relative">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-800">
                                Partner With{' '}
                                <GradientText colors={["#00f3ff", "#a855f7", "#f59e0b", "#00f3ff"]}>
                                    RAAM Infrastructure
                                </GradientText>
                            </h2>
                            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
                                For development partnerships, infrastructure collaboration, or strategic engagement opportunities, connect with RAAM Infrastructure Developers LLP.
                            </p>

                            {/* Engagement list */}
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {['Landowners', 'Strategic Investors', 'Infrastructure Partners', 'Consultants & Advisors', 'Institutional Stakeholders'].map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/50 border border-gray-200 text-sm text-slate-600 font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <Button
                                size="lg"
                                className="rounded-full bg-stone-600 text-white hover:bg-stone-700 px-10 py-7 text-lg font-bold shadow-lg"
                                onClick={() => window.location.href = 'mailto:admin@raaminfradev.com'}
                            >
                                Get In Touch
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* ===== FOOTER ===== */}
            <footer id="contact" className="py-16 px-8 border-t border-gray-300 relative z-10 bg-gray-100/80 backdrop-blur-xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <span className="text-2xl font-semibold">
                                <GradientText colors={["#00f3ff", "#22c55e", "#a855f7", "#00f3ff"]}>
                                    RAAM Infrastructure
                                </GradientText>
                            </span>
                            <p className="text-slate-500 mt-4 max-w-md leading-relaxed text-sm">
                                RAAM Infrastructure Developers LLP is a multidisciplinary development platform focused on master planning, structured real estate development, and infrastructure-led growth.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li><a href="#" className="hover:text-slate-800 transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-slate-800 transition-colors">About RAAM</a></li>
                                <li><a href="#capabilities" className="hover:text-slate-800 transition-colors">Capabilities</a></li>
                                <li><a href="#experience" className="hover:text-slate-800 transition-colors">Experience</a></li>
                                <li><a href="#news" className="hover:text-slate-800 transition-colors">News & Media</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Contact</h4>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li>
                                    <span className="text-slate-700 font-medium block mb-1">Email</span>
                                    <a href="mailto:admin@raaminfradev.com" className="hover:text-slate-800 transition-colors">
                                        admin@raaminfradev.com
                                    </a>
                                </li>
                                <li>
                                    <span className="text-slate-700 font-medium block mb-1">Registered Office</span>
                                    <address className="not-italic text-slate-500 leading-relaxed text-xs">
                                        Koduru Satya, Srinivas and Anupama<br />
                                        22-7-201, NH-16 Service Road<br />
                                        Kunchanapalli, Revenue Ward No-22<br />
                                        Mangala Giri Tadepalli-522501
                                    </address>
                                </li>
                            </ul>
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
        </div>
    )
}

export default App
