import {
    FiMail,
    FiMessageSquare,
    FiPhoneCall,
    FiClock,
    FiShield,
    FiUsers,
    FiSliders,
    FiZap
} from 'react-icons/fi';

const alertChannels = [
    {
        title: "E-Mail",
        highlight: "Instant Delivery",
        desc: "Email is the most popular way for any notification. Get alerted instantly with detailed incident reports.",
        icon: FiMail,
        accent: "#630cb4",
    },
    {
        title: "SMS",
        highlight: "24/7 Accessibility",
        desc: "Get alerted instantly by SMS, useful when you're offline. Critical notifications delivered to your phone.",
        icon: FiMessageSquare,
        accent: "#fb5d00",
    },
    {
        title: "Phone Call",
        highlight: "Priority Alerts",
        desc: "Get an automated voice call from us whenever your website is down. Immediate attention for critical issues.",
        icon: FiPhoneCall,
        accent: "#150f1e",
    }
];

const metrics = [
    { value: "<30s", label: "Response Time", icon: FiClock, accent: "#630cb4" },
    { value: "100%", label: "Reliability", icon: FiShield, accent: "#fb5d00" },
    { value: "Multi", label: "User Support", icon: FiUsers, accent: "#150f1e" },
    { value: "Custom", label: "Alert Rules", icon: FiSliders, accent: "#630cb4" }
];

const AutomatedAlerts = () => {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="alerts">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 mb-3">
                        <span className="text-[12px] font-bold text-[#630cb4] uppercase tracking-[0.2em]">
                            Never Miss An Incident
                        </span>
                    </span>
                    <h2 className="vh-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight leading-tight mb-6">
                        Stay informed with <span className="text-[#630cb4]">automated alerts</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        Even a few minutes of downtime can disrupt operations, cost revenue, and frustrate customers. The moment something goes wrong, VigilixHub notifies you instantly — across every channel you rely on.
                    </p>
                </div>

                {/* Trigger badge — the event that fires the alerts below */}
                <div className="flex justify-center mb-3">
                    <div className="vh-rise inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#150f1e] text-white shadow-lg">
                        <FiZap size={14} className="text-[#fb5d00]" />
                        <span className="text-[12.5px] font-bold">Incident detected — routing alerts</span>
                    </div>
                </div>

                {/* Alert Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pt-8">
                    {alertChannels.map((channel, index) => (
                        <div key={channel.title} className="relative">
                            {/* signal connector: dot travels down from the trigger badge into the card */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" aria-hidden="true">
                                <span
                                    className="vh-signal-dot absolute -left-[3px] top-0 w-[7px] h-[7px] rounded-full"
                                    style={{ backgroundColor: channel.accent, animationDelay: `${index * 0.3}s` }}
                                />
                            </div>

                            <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: channel.accent }} aria-hidden="true" />
                                <div
                                    className="w-12 h-12 rounded-xl text-white flex items-center justify-center mb-6 shadow-md"
                                    style={{ backgroundColor: channel.accent }}
                                >
                                    <channel.icon size={22} />
                                </div>
                                <h4 className="vh-display text-[19px] font-bold text-[#150f1e] mb-1">{channel.title}</h4>
                                <h5 className="text-[13px] font-bold mb-3" style={{ color: channel.accent }}>{channel.highlight}</h5>
                                <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                                    {channel.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Metrics Ledger */}
                <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 p-8 sm:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-slate-200 md:divide-y-0 md:divide-x">
                        {metrics.map((metric, index) => (
                            <div
                                key={metric.label}
                                className={`flex flex-col items-center text-center group py-5 md:py-0 ${index % 2 === 0 ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8'} md:px-8`}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-all duration-300"
                                    style={{ backgroundColor: metric.accent }}
                                >
                                    <metric.icon size={20} />
                                </div>
                                <div className="vh-display text-3xl sm:text-4xl font-bold text-[#150f1e] tracking-tight mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AutomatedAlerts;