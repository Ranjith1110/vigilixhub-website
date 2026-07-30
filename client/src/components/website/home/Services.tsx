'use client';

import { useState } from 'react';
import {
    FiTrendingUp,
    FiShare2,
    FiPenTool,
    FiSearch,
    FiTarget,
    FiPieChart,
    FiMonitor,
    FiLayout,
    FiCode,
    FiActivity,
    FiServer,
    FiCloud,
    FiUsers,
    FiAward,
    FiBriefcase,
    FiClock,
    FiGlobe,
    FiShield,
    FiArrowUpRight
} from 'react-icons/fi';

const marketingServices = [
    { icon: FiTrendingUp, title: "Digital Marketing", subtitle: "Performance-driven growth", desc: "Performance-driven campaigns designed to increase visibility, engagement, and qualified leads across digital channels." },
    { icon: FiShare2, title: "Social Media Mgt.", subtitle: "Build brand authority", desc: "End-to-end social presence management that builds brand authority, drives interaction, and sustains audience growth." },
    { icon: FiPenTool, title: "Design Support", subtitle: "Creative assets", desc: "Creative assets crafted for impact—aligned with brand identity, user experience, and conversion goals." },
    { icon: FiSearch, title: "SEO Optimization", subtitle: "Rankings & Traffic", desc: "Search optimization strategies that improve rankings, increase organic traffic, and deliver long-term visibility." },
    { icon: FiTarget, title: "Marketing Strategy", subtitle: "Go-to-market plans", desc: "Tailored go-to-market and growth strategies built around business objectives, audience insights, and competitive analysis." },
    { icon: FiPieChart, title: "Research & Development", subtitle: "Market insights", desc: "Market research, competitor analysis, and trend insights to guide smarter decisions and future-ready campaigns." }
];

const itServices = [
    { icon: FiMonitor, title: "Web Development", subtitle: "High-performance sites", desc: "High-performance, responsive websites built for usability, scalability, and business impact." },
    { icon: FiLayout, title: "UI / UX Design", subtitle: "User-centered design", desc: "User-centered design solutions that enhance usability, engagement, and conversion efficiency." },
    { icon: FiCode, title: "Software Development", subtitle: "Custom solutions", desc: "Custom software solutions engineered to streamline processes and support business growth." },
    { icon: FiActivity, title: "Server Monitoring", subtitle: "Health & Alerts", desc: "Real-time server health monitoring with instant alerts to prevent downtime and performance issues." },
    { icon: FiServer, title: "Infrastructure Monitoring", subtitle: "Stability & Availability", desc: "Continuous monitoring of critical IT infrastructure to ensure stability, availability, and reliability." },
    { icon: FiCloud, title: "Cloud Monitoring", subtitle: "Optimize Performance", desc: "Proactive oversight of cloud environments to optimize performance, security, and cost efficiency." }
];

const manpowerServices = [
    { icon: FiUsers, title: "Technical Staffing", subtitle: "Experienced Professionals", desc: "Experienced IT and technical professionals aligned to your project and operational requirements." },
    { icon: FiAward, title: "DM Resources", subtitle: "Dedicated Marketers", desc: "Dedicated marketers, strategists, and creatives to support campaigns and ongoing growth initiatives." },
    { icon: FiBriefcase, title: "Operational Support", subtitle: "Day-to-day Operations", desc: "Reliable manpower to handle day-to-day operations, ensuring continuity and efficiency." },
    { icon: FiClock, title: "Project-Based", subtitle: "On-demand Specialists", desc: "On-demand specialists deployed for short-term or high-impact projects without long-term commitments." },
    { icon: FiGlobe, title: "Remote & Onsite", subtitle: "Flexible Workforce", desc: "Flexible workforce solutions tailored to your business model and delivery needs." },
    { icon: FiShield, title: "Managed Resources", subtitle: "End-to-end Management", desc: "End-to-end manpower management handled by us—so you focus on outcomes, not administration." }
];

type Category = {
    key: string;
    label: string;
    tagline: string;
    accent: string;
    accentSoft: string;
    services: typeof marketingServices;
    premium?: boolean;
};

const categories: Category[] = [
    {
        key: 'marketing',
        label: 'Marketing',
        tagline: 'Campaigns, content, and channels that turn attention into pipeline.',
        accent: '#fb5d00',
        accentSoft: 'rgba(251,93,0,0.08)',
        services: marketingServices,
    },
    {
        key: 'it',
        label: 'IT Services',
        tagline: 'Engineering and monitoring that keeps products fast, stable, and secure.',
        accent: '#630cb4',
        accentSoft: 'rgba(99,12,180,0.08)',
        services: itServices,
    },
    {
        key: 'manpower',
        label: 'Manpower',
        tagline: 'Vetted talent embedded in your team, on your terms.',
        accent: '#150f1e',
        accentSoft: 'rgba(21,15,30,0.06)',
        services: manpowerServices,
        premium: true,
    },
];

const Services = () => {
    const [activeKey, setActiveKey] = useState(categories[0].key);
    const active = categories.find((c) => c.key === activeKey)!;

    return (
        <section className="py-14 lg:py-20 relative overflow-hidden">

            {/* Faint hub-and-spoke motif — a nod to VigilixHub, kept quiet */}
            <svg
                className="absolute -top-10 right-0 w-[560px] h-[560px] opacity-[0.05] pointer-events-none hidden lg:block"
                viewBox="0 0 400 400"
                aria-hidden="true"
            >
                <circle cx="200" cy="200" r="6" fill="#630cb4" />
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 200 + 160 * Math.cos(rad);
                    const y = 200 + 160 * Math.sin(rad);
                    return (
                        <g key={deg}>
                            <line x1="200" y1="200" x2={x} y2={y} stroke="#150f1e" strokeWidth="1.5" />
                            <circle cx={x} cy={y} r="4" fill="#fb5d00" />
                        </g>
                    );
                })}
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="vh-display inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#630cb4] mb-3">
                        What We Do
                    </span>
                    <h2 className="vh-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight leading-tight mb-4">
                        Quality services that <span className="text-[#630cb4]">drive growth</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        VigilixHub is your trusted partner, delivering specialized expertise to give you the decisive edge to scale with confidence.
                    </p>
                </div>

                {/* Folder-tab category switcher */}
                <div
                    role="tablist"
                    aria-label="Service categories"
                    className="flex justify-center gap-2 sm:gap-3 mb-0 relative z-20 px-2"
                >
                    {categories.map((cat) => {
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
                            {String(active.services.length).padStart(2, '0')} Capabilities
                        </span>
                    </div>

                    <div key={active.key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {active.services.map((service, index) => {
                            const isFeatured = index === 0;
                            return (
                                <div
                                    key={service.title}
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
                                            <service.icon size={isFeatured ? 26 : 22} />
                                        </div>
                                        <FiArrowUpRight
                                            className="text-slate-300 group-hover:text-slate-400"
                                            size={18}
                                        />
                                    </div>
                                    <h4 className={`vh-display font-bold text-[#150f1e] mb-1 ${isFeatured ? 'text-[22px]' : 'text-[18px]'}`}>
                                        {service.title}
                                    </h4>
                                    <h5
                                        className="text-[12.5px] font-bold mb-2 uppercase tracking-wide"
                                        style={{ color: active.accent }}
                                    >
                                        {service.subtitle}
                                    </h5>
                                    <p className={`text-slate-500 leading-relaxed font-medium ${isFeatured ? 'text-[15px] max-w-lg' : 'text-[14px]'}`}>
                                        {service.desc}
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

export default Services;