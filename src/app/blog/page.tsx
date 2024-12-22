// src/app/blog/page.tsx
import BlogCard from "@/components/BlogCard";
import NotionService from "@/constants/notion-service";
import { NotionPost } from "@/types/blogs";

// This enables ISR - page will be revalidated every hour
export const revalidate = 3600; // seconds

export default async function Blog() {
  const notionService = new NotionService();
  const posts: NotionPost[] = await notionService.getPublishedBlogPosts();

  return (
    <main>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <article className="prose">
            <h1>Blog</h1>
            {posts.map((post: NotionPost) => (
              <BlogCard key={post.id} post={post}></BlogCard>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
