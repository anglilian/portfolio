// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import NotionService from "@/constants/notion-service";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown (supports tables, strikethrough, etc.)

type PostPageProps = {
  params: { slug: string };
};

// Use this to fetch all slugs to generate static paths
export async function generateStaticParams() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const notionService = new NotionService();

  const postData = await notionService.getSingleBlogPost(slug);

  if (!postData) {
    notFound(); // Automatically show a 404 page if the post is not found
  }

  const { markdown, post } = postData;

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto relative">
        <div className="flex flex-col items-center justify-center">
          <article className="prose">
            <h1>{post.title}</h1>
            <Markdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]} // Support tables, task lists, etc.
            >
              {markdown}
            </Markdown>
          </article>
        </div>
      </main>
    </div>
  );
}
