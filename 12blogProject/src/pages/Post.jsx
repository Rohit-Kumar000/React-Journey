import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/major";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = Boolean(post && userData && post.userId === userData.$id);

  useEffect(() => {
    let cancelled = false;
    Promise.resolve()
      .then(() => {
        if (!cancelled) {
          setLoading(true);
          setError("");
          setPost(null);
        }
        return appwriteService.getPost(slug);
      })
      .then((result) => {
        if (cancelled) return;
        if (!result || result.status !== "active") {
          setError("This post is unavailable or you do not have permission to view it.");
          setPost(null);
          return;
        }
        setPost(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Unable to load this post. Please try again.");
      })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [slug, userData?.$id]);

  const deletePost = async () => {
    if (!post || !isAuthor || deleting) return;
    if (!window.confirm("Delete this post permanently? This action cannot be undone.")) return;
    setDeleting(true);
    setError("");
    try {
      await appwriteService.deletePost(post.$id);
      if (post.featuredImage) {
        appwriteService.deleteFile(post.featuredImage).catch((err) => {
          console.warn("Post deleted, but its image could not be removed:", err);
        });
      }
      navigate("/all-posts", { replace: true });
    } catch (err) {
      setError(err?.message || "The post could not be deleted. Check your Appwrite permissions.");
      setDeleting(false);
    }
  };

  if (loading) return <Container className="py-20"><p className="text-center text-slate-500">Loading post…</p></Container>;
  if (error || !post) return (
    <Container className="py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="font-serif text-2xl font-bold text-slate-900">Post unavailable</h1>
        <p className="mt-2 text-slate-600">{error || "This post could not be found."}</p>
        <Link to="/" className="mt-5 inline-block font-semibold text-indigo-600 hover:underline">Return to home</Link>
      </div>
    </Container>
  );

  const date = post.$createdAt
    ? new Date(post.$createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
    : "";
  const imageUrl = appwriteService.getFileView(post.featuredImage);

  return (
    <article className="py-10 sm:py-14">
      <Container className="max-w-3xl">
        <Link to="/" className="text-sm font-medium text-indigo-600 hover:underline">← Back to posts</Link>
        <h1 className="mt-5 break-words font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">{post.title}</h1>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">{date}</p>
          {isAuthor && <div className="flex gap-2">
            <Link to={`/edit-post/${post.$id}`}><Button variant="success">Edit post</Button></Link>
            <Button variant="danger" onClick={deletePost} disabled={deleting}>{deleting ? "Deleting…" : "Delete post"}</Button>
          </div>}
        </div>
        {imageUrl && <img src={imageUrl} alt={post.title} className="mt-8 max-h-[32rem] w-full rounded-2xl border border-slate-200 object-cover shadow-lg shadow-slate-200" />}
        <div className="post-content mt-10">{parse(post.content || "")}</div>
      </Container>
    </article>
  );
}
