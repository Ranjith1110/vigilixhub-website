'use client';

import { useState } from 'react';
import {
    FiTarget,
    FiEye,
    FiAward,
    FiZap,
    FiCheckCircle,
    FiTrendingUp,
    FiArrowUpRight,
    FiBookOpen,
    FiCompass,
    FiHeart
} from 'react-icons/fi';

const storyContent = [
    {
        icon: FiBookOpen,
        title: "Our Origins",
        subtitle: "Headquartered in Ramanathapuram",
        desc: "VigilixHub was co-founded by Sabari S. to bridge the gap between complex technology and sustainable business growth. What began as a focused initiative has rapidly evolved into a comprehensive IT, marketing, and manpower support ecosystem."
    },
    {
        icon: FiTrendingUp,
        title: "Our Evolution",
        subtitle: "A comprehensive ecosystem",
        desc: "Today, we specialize in high-performance web development, digital marketing, seamless WhatsApp Business API integrations, and continuous infrastructure monitoring."
    },
    {
        icon: FiCheckCircle,
        title: "Our Commitment",
        subtitle: "Enterprise-grade reliability",
        desc: "We believe in providing enterprise-grade reliability and dedicated talent to ensure your organization remains resilient and highly competitive in a digital-first world."
    }
];

const missionVisionContent = [
    {
        icon: FiTarget,
        title: "Our Mission",
        subtitle: "Empowering organizations",
        desc: "To equip organizations with the digital infrastructure, creative marketing, and skilled manpower necessary to dominate their industries."
    },
    {
        icon: FiEye,
        title: "Our Vision",
        subtitle: "Setting the global standard",
        desc: "To become the global standard for seamless tech integration, operational resilience, and strategic business scaling."
    },
    {
        icon: FiCompass,
        title: "Our Direction",
        subtitle: "Forward-thinking strategies",
        desc: "We continuously navigate the shifting digital landscape to ensure our partners are always positioned at the forefront of innovation."
    }
];

const valuesContent = [
    {
        icon: FiAward,
        title: "Uncompromising Quality",
        subtitle: "Excellence in execution",
        desc: "We deliver enterprise-grade solutions with a focus on stability, scalability, and flawless execution."
    },
    {
        icon: FiHeart,
        title: "Client-Centric Growth",
        subtitle: "Your success is our baseline",
        desc: "We embed ourselves in your ecosystem to drive measurable, data-backed results."
    },
    {
        icon: FiZap,
        title: "Agile Innovation",
        subtitle: "Adapting to the future",
        desc: "The digital landscape moves fast. We stay ahead by continuously adapting and deploying modern tech solutions."
    }
];

type AboutCategory = {
    key: string;
    label: string;
    tagline: string;
    accent: string;
    accentSoft: string;
    content: typeof storyContent;
    premium?: boolean;
};

const aboutCategories: AboutCategory[] = [
    {
        key: 'story',
        label: 'Our Story',
        tagline: 'From a focused initiative to a comprehensive digital ecosystem.',
        accent: '#630cb4',
        accentSoft: 'rgba(99,12,180,0.08)',
        content: storyContent,
    },
    {
        key: 'mission',
        label: 'Mission & Vision',
        tagline: 'Guiding principles that drive our strategies and shape our future.',
        accent: '#fb5d00',
        accentSoft: 'rgba(251,93,0,0.08)',
        content: missionVisionContent,
    },
    {
        key: 'values',
        label: 'Core Values',
        tagline: 'The foundational beliefs that dictate how we work and succeed together.',
        accent: '#150f1e',
        accentSoft: 'rgba(21,15,30,0.06)',
        content: valuesContent,
        premium: true,
    },
];

const AboutUs = () => {
    const [activeKey, setActiveKey] = useState(aboutCategories[0].key);
    const active = aboutCategories.find((c) => c.key === activeKey)!;

    return (
        <section className="py-14 lg:py-20 mt-10 relative overflow-hidden" id="about">

            {/* Faint hub-and-spoke motif — consistent with Services section */}
            <svg
                className="absolute -top-10 left-0 w-[560px] h-[560px] opacity-[0.05] pointer-events-none hidden lg:block rotate-180"
                viewBox="0 0 400 400"
                aria-hidden="true"
            >
                <circle cx="200" cy="200" r="6" fill="#fb5d00" />
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 200 + 160 * Math.cos(rad);
                    const y = 200 + 160 * Math.sin(rad);
                    return (
                        <g key={deg}>
                            <line x1="200" y1="200" x2={x} y2={y} stroke="#150f1e" strokeWidth="1.5" />
                            <circle cx={x} cy={y} r="4" fill="#630cb4" />
                        </g>
                    );
                })}
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="vh-display inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#630cb4] mb-3">
                        Who We Are
                    </span>
                    <h2 className="vh-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight leading-tight mb-4">
                        Empowering growth through <span className="text-[#fb5d00]">technology</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        We are a collective of strategists, engineers, and creatives dedicated to transforming how businesses operate, scale, and connect with their audiences.
                    </p>
                </div>

                {/* Folder-tab category switcher */}
                <div
                    role="tablist"
                    aria-label="About Us categories"
                    className="flex justify-center gap-2 sm:gap-3 mb-0 relative z-20 px-2"
                >
                    {aboutCategories.map((cat) => {
                        const isActive = cat.key === activeKey;
                        return (
                            <button
                                key={cat.key}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveKey(cat.key)}
                                className={`vh-display group relative px-4 sm:px-7 pt-3.5 pb-3 text-[13px] sm:text-[15px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                                    }`}
                                style={{
                                    backgroundColor: isActive ? cat.accent : '#f1f0f4',
                                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                                    marginBottom: isActive ? '-1px' : '0px',
                                }}
                            >
                                <span className="flex items-center gap-2">
                                    {cat.label}
                                    {cat.premium && (
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#fb5d00]' : 'bg-[#fb5d00]/70'}`}
                                            aria-hidden="true"
                                        />
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active panel */}
                <div
                    className="rounded-b-3xl rounded-tr-3xl border p-5 sm:p-8 relative z-10"
                    style={{ borderColor: `${active.accent}22`, backgroundColor: active.accentSoft }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
                        <p className="text-[15px] text-slate-600 font-medium max-w-xl leading-relaxed">
                            {active.tagline}
                        </p>
                        <span
                            className="vh-display text-[12px] font-bold uppercase tracking-wider whitespace-nowrap"
                            style={{ color: active.accent }}
                        >
                            {String(active.content.length).padStart(2, '0')} Core Focus Areas
                        </span>
                    </div>

                    <div key={active.key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {active.content.map((item, index) => {
                            const isFeatured = index === 0;
                            return (
                                <div
                                    key={item.title}
                                    className={`vh-card-enter bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${isFeatured ? 'lg:col-span-2 p-7' : 'p-6'
                                        }`}
                                    style={{ animationDelay: `${index * 60}ms` }}
                                >
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-1"
                                        style={{ backgroundColor: active.accent }}
                                        aria-hidden="true"
                                    />
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className={`rounded-xl text-white flex items-center justify-center ${isFeatured ? 'w-14 h-14' : 'w-12 h-12'}`}
                                            style={{ backgroundColor: active.accent }}
                                        >
                                            <item.icon size={isFeatured ? 26 : 22} />
                                        </div>
                                        <FiArrowUpRight
                                            className="text-slate-300 group-hover:text-slate-400"
                                            size={18}
                                        />
                                    </div>
                                    <h4 className={`vh-display font-bold text-[#150f1e] mb-1 ${isFeatured ? 'text-[22px]' : 'text-[18px]'}`}>
                                        {item.title}
                                    </h4>
                                    <h5
                                        className="text-[12.5px] font-bold mb-2 uppercase tracking-wide"
                                        style={{ color: active.accent }}
                                    >
                                        {item.subtitle}
                                    </h5>
                                    <p className={`text-slate-500 leading-relaxed font-medium ${isFeatured ? 'text-[15px] max-w-lg' : 'text-[14px]'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;