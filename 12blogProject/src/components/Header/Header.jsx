import { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Sign up", slug: "/signup", active: !authStatus, cta: true },
    { name: "Write", slug: "/add-post", active: authStatus, cta: true },
  ].filter((item) => item.active)

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.cta ? (
                  <NavLink
                    to={item.slug}
                    className="ml-2 inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 transition"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <NavLink to={item.slug} end={item.slug === "/"} className={linkClass}>
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
            {authStatus && <li><LogoutBtn /></li>}
          </ul>

          {/* mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        {/* mobile menu */}
        {open && (
          <ul className="md:hidden pb-4 space-y-1" onClick={() => setOpen(false)}>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.slug} end={item.slug === "/"} className={linkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
            {authStatus && <li><LogoutBtn className="w-full text-left" /></li>}
          </ul>
        )}
      </Container>
    </header>
  )
}

export default Header