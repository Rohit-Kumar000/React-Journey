import appwriteService from "../appwrite/major"
import { Link } from 'react-router-dom'

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim()

function PostCard({ $id, title, featuredImage, content, $createdAt }) {
  const excerpt = stripHtml(content).slice(0, 110)
  const date = $createdAt ? new Date($createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : ""

  return (
    <Link to={`/post/${$id}`} className="group block h-full">
      <article className="h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-slate-200">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          {featuredImage && (
            <img
              src={appwriteService.getFileView(featuredImage)}
              alt={title}
              loading="lazy"
              className="size-full object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          {date && <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">{date}</p>}
          <h2 className="mt-1.5 font-serif text-xl font-semibold leading-snug text-slate-900 line-clamp-2">{title}</h2>
          {excerpt && <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-3">{excerpt}</p>}
          <span className="mt-auto pt-4 text-sm font-semibold text-indigo-600">Read more &rarr;</span>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
