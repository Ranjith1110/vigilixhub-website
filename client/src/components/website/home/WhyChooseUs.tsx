import {
    FiShield,
    FiBell,
    FiBarChart2,
    FiSettings,
    FiCheckCircle,
    FiArrowUpRight
} from 'react-icons/fi';


const secondaryCards = [
    {
        icon: FiBell,
        title: 'Real-Time Alerts',
        desc: "Get instant notifications when issues arise. Our intelligent alert system keeps you in the loop without false-positive fatigue.",
        accent: '#fb5d00',
        kind: 'tags' as const,
        tags: [
            { label: 'Email', active: false },
            { label: 'SMS', active: false },
            { label: 'Slack', active: true },
        ],
    },
    {
        icon: FiBarChart2,
        title: 'Advanced Analytics',
        desc: 'Gain deep insights into your infrastructure. Track performance trends, spot bottlenecks, and make data-driven decisions.',
        accent: '#150f1e',
        kind: 'stats' as const,
        stats: [
            { value: '15+', label: 'Metrics Tracked' },
            { value: '90d', label: 'Data Retention' },
        ],
    },
    {
        icon: FiSettings,
        title: 'Easy Integration',
        desc: 'Get started in minutes with an intuitive setup. Seamlessly integrate with the tools you already run on.',
        accent: '#630cb4',
        kind: 'stack' as const,
        stack: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
    },
];

const quickStats = [
    { label: '500+ Servers Monitored' },
    { label: '24/7 Live Support' },
    { label: '99.99% Uptime' },
];

const WhyChooseUs = () => {
    return (
        <section className="py-14 lg:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Floating Container */}
                <div className="relative rounded-[2.5rem] lg:rounded-[3rem] bg-gradient-to-br from-[#630cb4]/5 via-[#630cb4]/[0.02] to-[#fb5d00]/5 p-6 sm:p-9 lg:p-12 border border-white shadow-2xl shadow-[#630cb4]/5 overflow-hidden">

                    {/* Subtle Dot Grid Background Pattern */}
                    <div className="absolute inset-0 z-0 opacity-30">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }}
                        />
                    </div>

                    {/* Faint hub motif, consistent with Navbar / Hero / Services */}
                    <svg
                        className="absolute -top-8 -right-8 w-64 h-64 opacity-[0.06] pointer-events-none hidden lg:block"
                        viewBox="0 0 400 400"
                        aria-hidden="true"
                    >
                        <circle cx="200" cy="200" r="6" fill="#630cb4" />
                        {[0, 72, 144, 216, 288].map((deg) => {
                            const rad = (deg * Math.PI) / 180;
                            const x = 200 + 150 * Math.cos(rad);
                            const y = 200 + 150 * Math.sin(rad);
                            return (
                                <g key={deg}>
                                    <line x1="200" y1="200" x2={x} y2={y} stroke="#150f1e" strokeWidth="1.5" />
                                    <circle cx={x} cy={y} r="4" fill="#fb5d00" />
                                </g>
                            );
                        })}
                    </svg>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-6 items-start">

                        {/* Left Content Column */}
                        <div className="lg:col-span-5 flex flex-col items-start text-left lg:pr-8 lg:sticky lg:top-28">
                            <span className="inline-flex items-center gap-2 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#fb5d00]" aria-hidden="true" />
                                <h3 className="text-[12px] sm:text-[13px] font-bold text-[#630cb4] uppercase tracking-[0.2em]">
                                    Powerful Monitoring Solutions
                                </h3>
                            </span>

                            <h2 className="vh-display text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight leading-[1.15] mb-4">
                                Why Choose <br className="hidden lg:block" />
                                <span className="text-[#630cb4]">VigilixHub</span>
                            </h2>

                            <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">
                                The health of your IT infrastructure is critical to your success. We provide robust, real-time server monitoring designed to keep systems running smoothly, so you can focus on growing the business.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-7">
                                {quickStats.map((stat) => (
                                    <span
                                        key={stat.label}
                                        className="inline-flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 rounded-full bg-white border border-slate-200 text-[12px] font-semibold text-slate-600"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#630cb4]" aria-hidden="true" />
                                        {stat.label}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="#services"
                                className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-[#150f1e] hover:text-[#630cb4] transition-colors"
                            >
                                See our full service list
                                <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>

                        {/* Right Cards Column */}
                        <div className="lg:col-span-7 flex flex-col gap-5">

                            {/* Featured banner card: Reliability */}
                            <div className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 border border-slate-50 hover:shadow-xl hover:shadow-[#630cb4]/10 transition-all duration-300 overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#630cb4]" aria-hidden="true" />
                                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                    <div className="flex-1">
                                        <div className="w-14 h-14 rounded-2xl bg-[#630cb4] flex items-center justify-center mb-4 shadow-md shadow-[#630cb4]/30">
                                            <FiShield className="text-white" size={26} />
                                        </div>
                                        <h4 className="vh-display text-[22px] font-bold text-[#150f1e] mb-2 tracking-tight">Reliability You Can Trust</h4>
                                        <p className="text-[14.5px] text-slate-600 leading-relaxed max-w-md">
                                            Our platform is built for 99.99% uptime, ensuring uninterrupted monitoring for the systems that matter most.
                                        </p>
                                    </div>
                                    <ul className="flex flex-col gap-2.5 sm:border-l sm:border-slate-100 sm:pl-6 flex-shrink-0">
                                        {[
                                            'Enterprise-grade redundancy',
                                            'Global server distribution',
                                            'Automated failover systems',
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-[13px] font-semibold text-slate-700 whitespace-nowrap">
                                                <FiCheckCircle className="text-[#fb5d00] shrink-0 mt-0.5" size={14} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Secondary cards row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {secondaryCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="relative bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: card.accent }} aria-hidden="true" />
                                        <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md"
                                            style={{ backgroundColor: card.accent }}
                                        >
                                            <card.icon className="text-white" size={22} />
                                        </div>
                                        <h4 className="vh-display text-[17px] font-bold text-[#150f1e] mb-2 tracking-tight">{card.title}</h4>
                                        <p className="text-[13.5px] text-slate-600 leading-relaxed mb-4">
                                            {card.desc}
                                        </p>

                                        {card.kind === 'tags' && (
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {card.tags.map((tag) => (
                                                    <span
                                                        key={tag.label}
                                                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg uppercase tracking-wider border ${tag.active
                                                                ? 'bg-[#fb5d00]/10 border-[#fb5d00]/20 text-[#fb5d00]'
                                                                : 'bg-slate-50 border-slate-100 text-slate-500'
                                                            }`}
                                                    >
                                                        {tag.label}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {card.kind === 'stats' && (
                                            <div className="grid grid-cols-2 gap-2.5 mt-auto">
                                                {card.stats.map((stat) => (
                                                    <div key={stat.label} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                                                        <div className="vh-display text-lg font-bold" style={{ color: card.accent }}>{stat.value}</div>
                                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {card.kind === 'stack' && (
                                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                                {card.stack.map((tech) => (
                                                    <span key={tech} className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-semibold rounded-lg">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;