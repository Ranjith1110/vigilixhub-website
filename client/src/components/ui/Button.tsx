import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    leftIcon,
    rightIcon,
    className = '',
    ...props
}) => {
    // Base classes for structure and layout
    const baseClasses = "group relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#630cb4] z-10";

    // Size variations
    const sizeClasses = {
        sm: "px-6 py-2.5 text-[14px]",
        md: "px-8 py-3 text-[15px]",
        lg: "px-10 py-3.5 text-[16px]",
    };

    // Styling variants (Color handling is outsourced to the animated pseudo-elements below)
    const variantClasses = {
        primary: "bg-[#630cb4] text-white shadow-lg shadow-[#630cb4]/20 hover:shadow-xl hover:shadow-[#fb5d00]/30 transform hover:-translate-y-1",
        secondary: "bg-[#fb5d00] text-white shadow-lg shadow-[#fb5d00]/20 hover:shadow-xl hover:shadow-[#630cb4]/30 transform hover:-translate-y-1",
        outline: "bg-transparent text-[#630cb4] border-2 border-[#630cb4] hover:text-white shadow-sm hover:shadow-lg hover:shadow-[#fb5d00]/30 transform hover:-translate-y-1 hover:border-transparent",
        ghost: "bg-transparent text-slate-600 hover:text-[#630cb4]",
    };

    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    // Creative Hover Background Fills
    const hoverEffect = variant === 'primary' ? (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#fb5d00] to-[#e05300] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out -z-10" />
    ) : variant === 'secondary' ? (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#630cb4] to-[#8c32d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out -z-10" />
    ) : variant === 'outline' ? (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#630cb4] to-[#fb5d00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10" />
    ) : variant === 'ghost' ? (
        <div className="absolute inset-0 w-full h-full bg-[#630cb4]/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full -z-10" />
    ) : null;

    // Animated Shine Sweep (Only for solid buttons)
    const shineEffect = (variant === 'primary' || variant === 'secondary') && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out -z-10" />
    );

    const content = (
        <>
            {hoverEffect}
            {shineEffect}
            {leftIcon && (
                <span className="mr-2 transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:scale-110">
                    {leftIcon}
                </span>
            )}
            <span className="relative z-10 tracking-wide">{children}</span>
            {rightIcon && (
                <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110">
                    {rightIcon}
                </span>
            )}
        </>
    );

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {content}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {content}
        </button>
    );
};