import { useEffect, useMemo, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/major";
import { Input } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let cancelled = false;
    appwriteService.getPosts()
      .then((response) => { if (!cancelled) setPosts(response?.rows || []); })
      .catch((err) => { if (!cancelled) setError(err?.message || "Unable to load posts."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter((post) => `${post.title || ""} ${post.content || ""}`.toLowerCase().includes(term));
  }, [posts, search]);

  return <div className="py-12"><Container>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div><h1 className="font-serif text-4xl font-bold text-slate-900">All posts</h1>
        <p className="mt-2 text-slate-500">Browse all published posts.</p></div>
      <div className="w-full sm:max-w-xs"><Input label="Search posts" placeholder="Search by title or content…" value={search} onChange={(event) => setSearch(event.target.value)} /></div>
    </div>
    {loading ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{[...Array(3)].map((_, i) => <div key={i} className="h-80 animate-pulse rounded-2xl bg-slate-200" />)}</div>
      : error ? <div role="alert" className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-5 text-rose-800">{error}<p className="mt-1 text-sm">Check your Appwrite configuration, table permissions, and indexes.</p></div>
      : filteredPosts.length === 0 ? <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center"><p className="font-serif text-2xl font-semibold text-slate-800">No posts found</p><p className="mt-2 text-slate-500">Try another search or create a new post.</p></div>
      : <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filteredPosts.map((post) => <PostCard key={post.$id} {...post} />)}</div>}
  </Container></div>;
}

export default AllPosts;
