
function Contact() {
    return (
        <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-24">
            <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
            <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-screen-xl px-6 lg:px-8">

                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                        Contact Us
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Let's start a{" "}
                        <span className="text-orange-400">conversation.</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        Have a question, an idea, or a project in mind?
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="grid overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/70 shadow-2xl lg:grid-cols-5">

                    <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800 p-8 sm:p-10 lg:col-span-2">
                        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[35px] border-white/10"></div>

                        <div className="relative">
                            <h2 className="text-2xl font-bold text-white">
                                Get in touch
                            </h2>

                            <p className="mt-3 leading-7 text-orange-100">
                                We're here to help. Reach out through any
                                of the following contact options.
                            </p>

                            <div className="mt-10 flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
                                        <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Our Location</h3>
                                    <p className="mt-1 text-sm leading-6 text-orange-100">
                                        Add your city and address here
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v3a2 2 0 0 1-2 2C9 20 4 15 3 6V5Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Phone Number</h3>
                                    <p className="mt-1 text-sm text-orange-100">
                                        Add your phone number
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Email Address</h3>
                                    <p className="mt-1 break-all text-sm text-orange-100">
                                        xyz@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-white/20 pt-6">
                                <p className="text-sm leading-6 text-orange-100">
                                    Have something exciting in mind? Let's
                                    build something great together.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        className="flex flex-col gap-6 p-8 sm:p-10 lg:col-span-3"
                        onSubmit={(e) => {
                            e.preventDefault()
                            alert("Form submitted! Connect a backend to receive messages.")
                        }}
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Send us a message
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                Fill out the form below and tell us how we can help.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="What is this regarding?"
                                required
                                className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                placeholder="Write your message here..."
                                required
                                className="w-full resize-y rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 sm:w-fit"
                        >
                            Send Message
                            <span aria-hidden="true">→</span>
                        </button>

                        <p className="text-xs leading-5 text-gray-500">
                            Your details should only be used to respond to your enquiry.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
