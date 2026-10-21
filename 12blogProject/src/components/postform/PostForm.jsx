import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button, Input, Rte } from "..";
import appwriteService from "../../appwrite/major";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const slugTransform = (value = "") => String(value)
  .normalize("NFKD")
  .toLowerCase()
  .replace(/[^a-z0-9\s._-]/g, "")
  .trim()
  .replace(/[\s._]+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^[.-]+|[.-]+$/g, "")
  .slice(0, 36);

const readableError = (error) => {
  if (error?.code === 409) return "This post URL already exists. Please choose a different slug.";
  if (error?.code === 401 || error?.code === 403) return "Appwrite denied this action. Check your login session and row/bucket permissions.";
  return error?.message || "Something went wrong. Please try again.";
};

export default function PostForm({ post }) {
  const { register, handleSubmit, setValue, control, getValues, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [error, setError] = useState("");

  const transform = slugTransform;
  const title = useWatch({ control, name: "title" });
  const selectedImage = useWatch({ control, name: "image" })?.[0];

  useEffect(() => {
    if (!post && title) setValue("slug", transform(title), { shouldValidate: true });
  }, [title, post, setValue, transform]);

  const submit = async (data) => {
    setError("");
    if (!userData?.$id) {
      setError("Your session has expired. Please sign in again.");
      return;
    }
    if (post && post.userId !== userData.$id) {
      setError("You can only edit posts that you created.");
      return;
    }

    let uploadedFileId = "";
    try {
      const imageFile = data.image?.[0];
      const slug = post?.$id || transform(data.slug) || "new-post";
      if (!post && !imageFile) throw new Error("Please choose a featured image.");

      if (imageFile) {
        const uploaded = await appwriteService.uploadFile(imageFile, userData.$id);
        uploadedFileId = uploaded.$id;
      }

      if (post) {
        const oldFileId = post.featuredImage;
        const updatedPost = await appwriteService.updatePost(post.$id, {
          title: data.title.trim(),
          content: data.content,
          featuredImage: uploadedFileId || oldFileId,
          userId: userData.$id,
        });
        // Delete the previous image only after the database update succeeds.
        if (uploadedFileId && oldFileId && oldFileId !== uploadedFileId) {
          appwriteService.deleteFile(oldFileId).catch((cleanupError) => {
            console.warn("Post updated, but the previous image could not be removed:", cleanupError);
          });
        }
        navigate(`/post/${updatedPost.$id}`);
      } else {
        const createdPost = await appwriteService.createPost({
          title: data.title.trim(),
          slug,
          content: data.content,
          featuredImage: uploadedFileId,
          userId: userData.$id,
        });
        navigate(`/post/${createdPost.$id}`);
      }
    } catch (err) {
      if (uploadedFileId) {
        appwriteService.deleteFile(uploadedFileId).catch((cleanupError) => {
          console.warn("Temporary uploaded image could not be removed:", cleanupError);
        });
      }
      setError(readableError(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="grid gap-6 lg:grid-cols-3" noValidate>
      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <div>
          <Input label="Post title" placeholder="Give your post a clear title" autoComplete="off"
            {...register("title", { required: "A title is required.", minLength: { value: 3, message: "Title must contain at least 3 characters." }, maxLength: { value: 180, message: "Title must be 180 characters or fewer." } })} />
          {errors.title && <p className="mt-1 text-sm text-rose-600">{errors.title.message}</p>}
        </div>
        <div>
          <Input label="Post URL slug" placeholder="my-first-post" disabled={!!post} autoComplete="off"
            {...register("slug", { required: "A URL slug is required.", validate: (value) => !!transform(value) || "Use letters and numbers to create a valid URL slug." })}
            onChange={(event) => setValue("slug", transform(event.target.value), { shouldValidate: true })} />
          <p className="mt-1 text-xs text-slate-500">Use letters, numbers, hyphens, dots, or underscores. Maximum 36 characters.</p>
          {errors.slug && <p className="mt-1 text-sm text-rose-600">{errors.slug.message}</p>}
        </div>
        <Rte label="Post content" name="content" control={control} defaultValue={getValues("content")}
          rules={{ validate: (value) => String(value || "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim().length > 0 || "Post content is required." }} />
        {errors.content && <p className="text-sm text-rose-600">{errors.content.message}</p>}
      </div>

      <aside className="h-fit space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
        {error && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
        <div>
          <Input label={post ? "Replace featured image (optional)" : "Featured image"} type="file"
            accept="image/png,image/jpeg,image/gif,image/webp"
            {...register("image", { validate: (files) => post || files?.length > 0 || "Please choose a featured image." })} />
          <p className="mt-1 text-xs text-slate-500">JPG, PNG, WEBP, or GIF. Maximum 5 MB.</p>
          {selectedImage && <p className="mt-2 break-all text-xs text-slate-600">Selected: {selectedImage.name}</p>}
          {post && appwriteService.getFileView(post.featuredImage) && (
            <img src={appwriteService.getFileView(post.featuredImage)} alt="Current featured image" className="mt-3 max-h-56 w-full rounded-xl border border-slate-200 object-cover" />
          )}
          {errors.image && <p className="mt-1 text-sm text-rose-600">{errors.image.message}</p>}
        </div>
        <div className="rounded-lg bg-indigo-50 p-3 text-sm text-indigo-900">
          <p className="font-semibold">Public post</p>
          <p className="mt-1 text-xs leading-5">Published posts are visible to everyone. Private drafts require a server-side Appwrite Function and are not stored in this public posts table.</p>
        </div>
        <Button type="submit" variant={post ? "success" : "primary"} className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Saving post…" : post ? "Save changes" : "Publish post"}
        </Button>
      </aside>
    </form>
  );
}
