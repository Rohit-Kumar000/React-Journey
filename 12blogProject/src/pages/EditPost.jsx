import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/major";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    let cancelled = false;
    appwriteService.getPost(slug)
      .then((result) => {
        if (cancelled) return;
        if (!result || result.userId !== userData?.$id) {
          setError("You can only edit posts that you created.");
          return;
        }
        setPost(result);
      })
      .catch((err) => { if (!cancelled) setError(err?.message || "Unable to load this post."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [slug, userData?.$id]);

  if (loading) return <Container className="py-16"><p className="text-slate-500">Loading editor…</p></Container>;
  if (error || !post) return <Container className="py-16"><div className="rounded-2xl border border-slate-200 bg-white p-8">
    <h1 className="font-serif text-2xl font-bold text-slate-900">Unable to edit post</h1>
    <p className="mt-2 text-slate-600">{error || "This post could not be found."}</p>
    <Link to="/all-posts" className="mt-4 inline-block font-semibold text-indigo-600 hover:underline">Back to posts</Link>
  </div></Container>;

  return <div className="py-12"><Container>
    <button type="button" onClick={() => navigate(-1)} className="mb-4 text-sm font-medium text-indigo-600 hover:underline">← Go back</button>
    <h1 className="mb-8 font-serif text-4xl font-bold text-slate-900">Edit post</h1>
    <PostForm post={post} />
  </Container></div>;
}

export default EditPost;
