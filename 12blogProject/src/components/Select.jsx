import React, { useId } from 'react'

function Select({ options, label, className = "", ...props }, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label htmlFor={id} className='block mb-1.5 text-sm font-medium text-slate-700'>
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 capitalize ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
