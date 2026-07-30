import { FiArrowRight, FiShield, FiServer, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { Button } from '../../ui/Button';

const hubNodes = [
    { key: 'it', label: 'IT Services', icon: FiServer, accent: '#630cb4', top: '10%', left: '50%' },
    { key: 'marketing', label: 'Marketing', icon: FiTrendingUp, accent: '#fb5d00', top: '70%', left: '84%' },
    { key: 'manpower', label: 'Manpower', icon: FiUsers, accent: '#150f1e', top: '70%', left: '16%' },
];

const hubLines = [
    { d: 'M50 50 L50 10', delay: '0.3s' },
    { d: 'M50 50 L84 70', delay: '0.5s' },
    { d: 'M50 50 L16 70', delay: '0.7s' },
];

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 min-h-[85vh] flex items-center">

            {/* Background Grid — kept subtle, no corner blur blobs this time */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center">

                    <div className="flex flex-col items-start text-left max-w-xl">
                        {/* Live-status badge */}
                        <div
                            className="vh-rise inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#630cb4]/20 bg-white shadow-sm mb-6"
                            style={{ animationDelay: '0s' }}
                        >
                            <FiShield className="text-[#630cb4]" size={14} />
                            <span className="text-xs font-bold text-[#630cb4] tracking-wide uppercase">
                                Live Infrastructure Monitoring
                            </span>
                        </div>

                        {/* Headings */}
                        <h1 className="vh-display tracking-tight leading-[1.15] mb-5">
                            <span
                                className="vh-rise block text-lg sm:text-xl font-semibold text-slate-500 mb-2"
                                style={{ animationDelay: '0.08s' }}
                            >
                                Welcome to VigilixHub
                            </span>
                            <span
                                className="vh-rise block text-[36px] sm:text-[48px] font-bold text-[#150f1e]"
                                style={{ animationDelay: '0.16s' }}
                            >
                                Your strategic partner in
                            </span>
                            <span
                                className="vh-rise block text-[36px] sm:text-[48px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#630cb4] to-[#fb5d00]"
                                style={{ animationDelay: '0.24s' }}
                            >
                                growth & technology.
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <p
                            className="vh-rise text-base text-slate-600 font-medium leading-relaxed mb-10 max-w-md"
                            style={{ animationDelay: '0.32s' }}
                        >
                            We deliver IT Services, Digital Marketing, and Infrastructure Monitoring to keep your organization resilient, visible, and highly competitive.
                        </p>

                        {/* Buttons */}
                        <div
                            className="vh-rise flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                rightIcon={<FiArrowRight size={18} />}
                                className="w-full sm:w-auto"
                            >
                                Schedule a free Consultation
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto"
                            >
                                Services
                            </Button>
                        </div>
                    </div>

                    {/* Signature visual: the Vigil Hub — a live monitoring console
                        that literally maps to the three service pillars below */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto flex justify-center">

                        {/* single restrained glow, replaces the two corner blur blobs */}
                        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#630cb4]/10 to-[#fb5d00]/10 blur-3xl pointer-events-none" />

                        <div className="vh-rise relative w-full aspect-square sm:w-[460px] sm:h-[460px] rounded-[2.5rem] bg-white/90 backdrop-blur-sm flex flex-col p-7 shadow-2xl shadow-[#630cb4]/10 border border-white"
                            style={{ animationDelay: '0.2s' }}>

                            {/* status row */}
                            <div className="flex items-center justify-between mb-2">
                                <span className="vh-display text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    System Status
                                </span>
                                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    All systems operational
                                </span>
                            </div>

                            {/* hub diagram */}
                            <div className="relative flex-1 min-h-0">
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    {hubLines.map((line, i) => (
                                        <path
                                            key={i}
                                            d={line.d}
                                            pathLength={1}
                                            stroke="#150f1e"
                                            strokeOpacity={0.15}
                                            strokeWidth={0.6}
                                            fill="none"
                                            className="vh-line"
                                            style={{ animationDelay: line.delay }}
                                        />
                                    ))}
                                </svg>

                                {/* central node */}
                                <div
                                    className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center p-2.5"
                                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                >
                                    <img src="/logo.png" alt="VigilixHub" className="w-full h-full object-contain" />
                                </div>

                                {/* satellite nodes: IT, Marketing, Manpower */}
                                {hubNodes.map((node) => (
                                    <div
                                        key={node.key}
                                        className="absolute flex items-center gap-1.5 bg-white rounded-full border border-slate-100 shadow-md pl-2 pr-3 py-1.5"
                                        style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                                    >
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: node.accent }}
                                        >
                                            <node.icon size={12} className="text-white" />
                                        </span>
                                        <span className="text-[11px] font-semibold text-[#150f1e] whitespace-nowrap">
                                            {node.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* heartbeat / live signal strip */}
                            <div className="border-t border-slate-100 pt-3 mt-2">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">Live Signal</span>
                                </div>
                                <svg viewBox="0 0 240 32" className="w-full h-6" preserveAspectRatio="none" aria-hidden="true">
                                    <path
                                        d="M0 16 L50 16 L58 4 L66 28 L74 16 L120 16 L128 4 L136 28 L144 16 L240 16"
                                        fill="none"
                                        stroke="#630cb4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="vh-scan-line"
                                    />
                                </svg>
                            </div>

                            {/* stat chips */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['99.9% Uptime', '24/7 Monitoring', '3 Core Services'].map((stat) => (
                                    <span
                                        key={stat}
                                        className="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5"
                                    >
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;