// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rohit-Kumar000')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
  return (
        <section className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-20">

            <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-4xl">

                <div className="mb-12 text-center">
                    <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                        Developer Profile
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
                        My <span className="text-orange-400">GitHub</span>
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Explore my profile, repositories, and coding journey.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl">

                    <div className="h-32 bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400 sm:h-40"></div>

                    <div className="px-6 pb-8 sm:px-10">

                        <div className="-mt-16 flex flex-col items-center sm:-mt-20">
                            <div className="rounded-full bg-gray-900 p-2 shadow-xl shadow-orange-500/10">
                                <img
                                    className="h-32 w-32 rounded-full border-4 border-gray-900 object-cover sm:h-40 sm:w-40"
                                    src={data.avatar_url}
                                    alt="GitHub Profile"
                                />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                                {data.name || data.login}
                            </h2>

                            <p className="mt-1 text-gray-400">
                                @{data.login}
                            </p>

                            {data.bio && (
                                <p className="mt-4 max-w-lg text-center leading-7 text-gray-300">
                                    {data.bio}
                                </p>
                            )}
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5 text-center transition hover:border-orange-500/50">
                                <p className="text-3xl font-extrabold text-orange-400">
                                    {data.followers}
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Followers
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5 text-center transition hover:border-orange-500/50">
                                <p className="text-3xl font-extrabold text-white">
                                    {data.following}
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Following
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5 text-center transition hover:border-orange-500/50">
                                <p className="text-3xl font-extrabold text-white">
                                    {data.public_repos}
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Public Repos
                                </p>
                            </div>

                        </div>

                        <div className="mt-8 flex justify-center">
                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-xl bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                            >
                                Visit GitHub Profile
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="text-sm text-gray-400 transition hover:text-orange-400"
                    >
                        ← Back to Home
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch(
        'https://api.github.com/users/Rohit-Kumar000'
    )

    if (!response.ok) {
        throw new Error('Failed to fetch GitHub profile')
    }

    return response.json()
}