import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label className='block mb-1.5 text-sm font-medium text-slate-700' htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-50 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-indigo-700 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
