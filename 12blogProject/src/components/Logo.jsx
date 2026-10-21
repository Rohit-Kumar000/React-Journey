function Logo({ size = 36 }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        className="grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-1/2">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      </span>
      <span className="font-serif text-xl font-bold tracking-tight text-slate-900">VBlog</span>
    </span>
  )
}

export default Logo
