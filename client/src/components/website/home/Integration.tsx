import {
    FaApple,
    FaWindows,
    FaLinux,
    FaUbuntu,
    FaAws,
    FaDocker,
    FaNodeJs
} from 'react-icons/fa';
import {
    SiGooglecloud,
    SiKubernetes
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { Button } from '../../ui/Button';

const osSupport = [
    { name: "macOS", highlight: "Full Support", icon: FaApple, iconColor: "text-slate-900", accent: "#0f172a" },
    { name: "Windows", highlight: "Full Support", icon: FaWindows, iconColor: "text-[#0078D6]", accent: "#0078D6" },
    { name: "Linux", highlight: "Full Support", icon: FaLinux, iconColor: "text-slate-800", accent: "#1e293b" },
    { name: "Ubuntu", highlight: "Full Support", icon: FaUbuntu, iconColor: "text-[#E95420]", accent: "#E95420" }
];

// Order maps to fixed positions around the hub: right, bottom-right, bottom-left, left, top-left, top-right
const techStack = [
    { name: "AWS", desc: "Cloud Services", icon: FaAws, color: "text-[#FF9900]", bg: "bg-[#FF9900]/10", accent: "#FF9900", pos: { top: '50%', left: '91%' } },
    { name: "Azure", desc: "Microsoft Cloud", icon: VscAzure, color: "text-[#0089D6]", bg: "bg-[#0089D6]/10", accent: "#0089D6", pos: { top: '85.5%', left: '70.5%' } },
    { name: "Google Cloud", desc: "GCP Platform", icon: SiGooglecloud, color: "text-[#4285F4]", bg: "bg-[#4285F4]/10", accent: "#4285F4", pos: { top: '85.5%', left: '29.5%' } },
    { name: "Docker", desc: "Containers", icon: FaDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10", accent: "#2496ED", pos: { top: '50%', left: '9%' } },
    { name: "Kubernetes", desc: "Orchestration", icon: SiKubernetes, color: "text-[#326CE5]", bg: "bg-[#326CE5]/10", accent: "#326CE5", pos: { top: '14.5%', left: '29.5%' } },
    { name: "Node.js", desc: "Runtime", icon: FaNodeJs, color: "text-[#339933]", bg: "bg-[#339933]/10", accent: "#339933", pos: { top: '14.5%', left: '70.5%' } }
];

const Integration = () => {
    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" id="integration">

            {/* Background Dot Grid */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-[#630cb4] tracking-wide uppercase">
                            Cross-Platform
                        </span>
                    </span>
                    <h2 className="vh-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight leading-tight mb-6">
                        Seamless <span className="text-[#630cb4]">integration</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        VigilixHub integrates with your existing IT ecosystem for streamlined operations. Whether you run cloud services, virtual machines, or on-premises servers, we've got you covered.
                    </p>
                </div>

                {/* Hub visual — VigilixHub at the center, your stack orbiting it */}
                <div className="hidden lg:flex justify-center mb-16">
                    <div className="relative w-[340px] h-[340px]">
                        {/* connecting lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 340 340" aria-hidden="true">
                            <circle cx="170" cy="170" r="140" fill="none" stroke="#630cb4" strokeWidth="1" strokeDasharray="4 6" />
                            {techStack.map((tech) => (
                                <line
                                    key={tech.name}
                                    x1="170"
                                    y1="170"
                                    x2={(parseFloat(tech.pos.left) / 100) * 340}
                                    y2={(parseFloat(tech.pos.top) / 100) * 340}
                                    stroke="#150f1e"
                                    strokeWidth="1"
                                />
                            ))}
                        </svg>

                        {/* center: VigilixHub */}
                        <div className="vh-orbit-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white border border-slate-100 shadow-xl shadow-[#630cb4]/15 flex items-center justify-center p-4 z-10">
                            <img src="/logo.png" alt="VigilixHub" className="w-full h-full object-contain" />
                        </div>

                        {/* orbiting tech chips */}
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:-translate-y-[calc(50%+4px)] hover:shadow-lg transition-all duration-300 z-10"
                                style={{ top: tech.pos.top, left: tech.pos.left }}
                                title={tech.name}
                            >
                                <tech.icon size={26} className={tech.color} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Operating Systems Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
                    {osSupport.map((os) => (
                        <div key={os.name} className="relative bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: os.accent }} aria-hidden="true" />
                            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                <os.icon size={24} className={os.iconColor} />
                            </div>
                            <div>
                                <h4 className="text-[16px] font-bold text-[#150f1e] leading-tight">{os.name}</h4>
                                <span className="inline-block mt-0.5 text-[10.5px] font-bold text-[#630cb4] uppercase tracking-wider bg-[#630cb4]/8 px-2 py-0.5 rounded-full">
                                    {os.highlight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Entire Stack Grid */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
                        <h3 className="vh-display text-xl font-bold text-[#150f1e] tracking-tight">Works with Your Entire Stack</h3>
                        <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="relative bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: tech.accent }} aria-hidden="true" />
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${tech.bg} ${tech.color}`}>
                                    <tech.icon size={28} />
                                </div>
                                <div className="mt-1">
                                    <h4 className="text-[18px] font-bold text-[#150f1e] mb-1">{tech.name}</h4>
                                    <p className="text-[14px] font-medium text-slate-500">
                                        {tech.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200/60">
                    <Button
                        href="#get-started"
                        variant="primary"
                        size="lg"
                        className="w-full sm:w-auto"
                    >
                        Get Started Now
                    </Button>
                    <Button
                        href="#documentation"
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto"
                    >
                        View Documentation
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Integration;