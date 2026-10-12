export default function About() {
    return (
        
<div className="relative overflow-hidden bg-gray-950 py-20 sm:py-24">
    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

    <div className="relative mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Image Section */}
            <div className="group relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 opacity-20 blur-xl transition duration-500 group-hover:opacity-40"></div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg"
                        alt="Hot air balloon over a river"
                        className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-96"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>

                    <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-gray-950/70 px-4 py-3 backdrop-blur-md">
                        <p className="text-sm font-semibold text-white">
                            Build. Learn. Create.
                        </p>
                        <p className="mt-1 text-xs text-gray-300">
                            Turning ideas into experiences
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                    <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                    About React Development
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    React development is driven by
                    <span className="text-orange-400"> passionate developers.</span>
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-400">
                    React makes it easier to build interactive, reusable,
                    and dynamic user interfaces. With component-based
                    development, developers can create applications that
                    are easier to maintain and scale.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-400">
                    From learning the fundamentals to building real-world
                    projects, every step brings new opportunities to
                    improve your coding skills and turn creative ideas
                    into practical web experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300">
                        ⚛️ React
                    </span>
                    <span className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300">
                        🎨 Tailwind CSS
                    </span>
                    <span className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300">
                        💻 JavaScript
                    </span>
                </div>
            </div>

        </div>
    </div>
</div>

    );
}