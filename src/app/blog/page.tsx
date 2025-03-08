// src/app/blog/page.tsx
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getPublishedBlogPosts } from "@/constants/notion-service";
import { NotionPost } from "@/types/blogs";
import Link from "next/link";

// This enables ISR - page will be revalidated every hour
export const revalidate = 3600; // seconds

export default async function Blog() {
  const posts: NotionPost[] = await getPublishedBlogPosts();

  return (
    <main>
      <div className="max-w-xl mx-auto p-6">
        <div className="flex flex-col items-left justify-center">
          <h1>Blog</h1>
          <div className="my-8">
            <Link
              href="/"
              className="text-orange-600 border-2 border-orange-600 rounded-full px-4 py-2 hover:bg-orange-600 hover:text-white transition-colors text-sm hover:no-underline"
            >
              home
            </Link>
          </div>
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
