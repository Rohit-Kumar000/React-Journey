import {Link, NavLink} from  'react-router-dom'

export default function Header() {
    return (
        
<header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 shadow-lg backdrop-blur-md">
    <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-5 py-3 lg:px-8">

        <Link to="/" className="flex items-center gap-3">
            <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-11 w-auto object-contain"
                alt="Logo"
            />
        </Link>

        <div className="order-2 flex items-center gap-3 lg:order-3">
            <Link
                to="#"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
            >
                Log in
            </Link>

            <Link
                to="#"
                className="rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500"
            >
                Get Started
                <span className="ml-2">→</span>
            </Link>
        </div>

        <div className="order-3 w-full lg:order-2 lg:w-auto">
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:mt-0 lg:gap-x-2">

                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/About" },
                    { name: "Contact", path: "/Contact" },
                    { name: "Github", path: "/Github" },
                ].map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                `block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                    isActive
                                        ? "bg-orange-500/15 text-orange-400"
                                        : "text-gray-300 hover:bg-white/10 hover:text-orange-400"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}

            </ul>
        </div>

    </nav>
</header>

    );
}