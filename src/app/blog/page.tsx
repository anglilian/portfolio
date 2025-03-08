// src/app/blog/page.tsx
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getPublishedBlogPosts } from "@/constants/notion-service";
import { NotionPost } from "@/types/blogs";

// This enables ISR - page will be revalidated every hour
export const revalidate = 3600; // seconds

export default async function Blog() {
  const posts: NotionPost[] = await getPublishedBlogPosts();

  return (
    <main>
      <div className="max-w-xl mx-auto p-6">
        <div className="flex flex-col items-left justify-center">
          <h1>Blog</h1>
          <article className="prose">
            {posts.map((post: NotionPost) => (
              <BlogCard key={post.id} post={post}></BlogCard>
            ))}
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
