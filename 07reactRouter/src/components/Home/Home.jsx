
import { Link } from 'react-router-dom'

function DownloadSection() {
    return (
        <section className="overflow-hidden bg-gray-950 px-4 py-16 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                <div className="relative isolate overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-950/60">

                    <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl"></div>

                    <div className="grid items-center gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2 lg:px-16">

                        <div className="relative z-10 text-center lg:text-left">
                            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                                Ready to get started?
                            </span>

                            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Download
                                <span className="block text-orange-400">
                                    Now.
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 lg:mx-0 sm:text-lg">
                                Take your experience to the next level.
                                Get started today and explore what's possible.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-3 rounded-xl bg-orange-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M3 2.5v19l10-9.5L3 2.5zm11.3 10.7L5 22l14-7.5-4.7-1.3zM5 2l9.3 8.8 4.7-1.3L5 2z" />
                                    </svg>
                                    Download Now
                                    <span aria-hidden="true">→</span>
                                </Link>

                                <Link
                                    to="/About"
                                    className="inline-flex items-center rounded-xl border border-gray-700 px-6 py-3.5 font-medium text-gray-200 transition hover:border-orange-500 hover:text-orange-400"
                                >
                                    Learn More
                                </Link>
                            </div>

                            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400 lg:justify-start">
                                <span>✓ Easy to get started</span>
                                <span>✓ Modern experience</span>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-lg">
                            <div className="absolute inset-0 scale-90 rounded-full bg-orange-500/20 blur-3xl"></div>

                            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition duration-500 hover:-translate-y-2">
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg"
                                    alt="Hot air balloon floating above a river"
                                    className="h-64 w-full object-cover sm:h-80 lg:h-96"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>

                                <div className="absolute bottom-5 left-5">
                                    <p className="text-sm font-medium text-orange-300">
                                        EXPLORE MORE
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-white">
                                        Your Next Journey
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="py-20 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                        Keep Exploring
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
                        Ideas into <span className="text-orange-400">Reality.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
                        Discover new possibilities, learn new skills, and
                        keep building something amazing every day.
                    </p>

                    <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg"
                            alt="Scenic hot air balloon landscape"
                            className="h-56 w-full object-cover transition duration-700 hover:scale-105 sm:h-80"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DownloadSection
