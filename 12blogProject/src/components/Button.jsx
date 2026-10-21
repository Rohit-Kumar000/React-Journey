const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600",
    danger: "bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600",
    ghost: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus-visible:outline-slate-400",
}

export default function Button({
    children,
    type = "button",
    variant = "primary",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
