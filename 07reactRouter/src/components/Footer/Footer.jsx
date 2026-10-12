
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    const footerLinkClass = ({ isActive }) =>
        `inline-flex items-center transition duration-200 ${
            isActive
                ? 'font-semibold text-orange-400'
                : 'text-gray-400 hover:text-orange-400'
        }`

    return (
        <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
            <div className="mx-auto max-w-screen-xl px-6 py-12 lg:px-8">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-14 w-auto object-contain"
                                alt="Logo"
                            />
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Building modern web experiences with clean design,
                            useful features, and powerful technology.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Rohit-Kumar000"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-orange-500 hover:text-orange-400"
                            >
                                GitHub ↗
                            </a>

                            <NavLink
                                to="/Contact"
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-2 text-sm font-semibold transition ${
                                        isActive
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-orange-600 text-white hover:bg-orange-500'
                                    }`
                                }
                            >
                                Contact Us →
                            </NavLink>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Resources
                        </h2>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <NavLink to="/" end className={footerLinkClass}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className={footerLinkClass}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Github" className={footerLinkClass}>
                                    GitHub Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Connect
                        </h2>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="https://github.com/Rohit-Kumar000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:text-orange-400"
                                >
                                    GitHub ↗
                                </a>
                            </li>
                            <li>
                                <NavLink to="/Contact" className={footerLinkClass}>
                                    Contact Me
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Legal
                        </h2>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <NavLink to="/" className={footerLinkClass}>
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className={footerLinkClass}>
                                    Terms & Conditions
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-center text-sm sm:text-left">
                        © {new Date().getFullYear()}{' '}
                        <span className="font-semibold text-white">
                            Your Website
                        </span>
                        . All rights reserved.
                    </p>

                    <p className="text-center text-xs text-gray-500 sm:text-right">
                        Designed with{' '}
                        <span className="text-orange-500">♥</span> and React
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
