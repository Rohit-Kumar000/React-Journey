import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appwriteService from "../appwrite/major"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [failed, setFailed] = useState(false)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts()
            .then((res) => setPosts(res?.rows || []))
            .catch((error) => {
                console.error("Unable to load published posts:", error)
                setFailed(true)
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {/* hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 text-white">
                <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-16 size-96 rounded-full bg-violet-400/20 blur-3xl" />
                <Container className="relative py-16 sm:py-24 text-center">
                    <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">Welcome to VBlog</p>
                    <h1 className="mt-5 font-serif text-4xl sm:text-6xl font-bold leading-tight">Stories worth sharing,<br className="hidden sm:block" /> ideas worth reading.</h1>
                    <p className="mx-auto mt-5 max-w-xl text-indigo-100 sm:text-lg">Write, publish and discover posts from people around you.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link to={authStatus ? "/add-post" : "/signup"} className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow hover:bg-indigo-50 transition">
                            {authStatus ? "Write a post" : "Start writing"}
                        </Link>
                        {!authStatus && (
                            <Link to="/login" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Sign in</Link>
                        )}
                    </div>
                </Container>
            </section>

            {/* latest posts */}
            <section className="py-14">
                <Container>
                    <h2 className="font-serif text-3xl font-bold text-slate-900">Latest posts</h2>

                    {loading ? (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[...Array(3)].map((_, i) => <div key={i} className="h-80 rounded-2xl bg-slate-200 animate-pulse" />)}
                        </div>
                    ) : failed ? (
                        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
                            <p className="font-semibold">Posts could not be loaded. Please try again later.</p>
                            <p className="mt-1 text-sm">
                                Check your Appwrite project, table read permissions, and the required index on the <code>status</code> column.
                            </p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                            <p className="font-serif text-2xl font-semibold text-slate-800">No posts have been published yet.</p>
                            <p className="mt-2 text-slate-500">{authStatus ? "Start by writing your first post." : "Sign in to write your first post."}</p>
                        </div>
                    ) : (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => <PostCard key={post.$id} {...post} />)}
                        </div>
                    )}
                </Container>
            </section>
        </>
    )
}

export default Home
