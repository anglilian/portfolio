import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import {
  getSingleBlogPost,
  markdownOptions,
  getAllBlogSlugs,
} from "@/constants/notion-service";
import dayjs from "dayjs";
import NextPostNavigation from "@/components/NextPostNavigation";
import Footer from "@/components/Footer";

type PostPageProps = {
  params: { slug: string };
};

// Add these static generation functions
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Change revalidate to false if you want to only rebuild on deployment
// Or keep a value (in seconds) if you want incremental static regeneration
export const revalidate = false;

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getSingleBlogPost(params.slug);

  if (!postData) {
    notFound(); // Automatically show a 404 page if the post is not found
  }

  let { markdown, post } = postData;

  // Format the date
  const formattedDate = dayjs(post.date).format("MMM D, YYYY");

  return (
    <div className="min-h-screen p-6">
      <main className="max-w-4xl mx-auto relative">
        <div className="flex flex-col items-center justify-center space-y-8 ">
          <article className="prose">
            <p className="text-gray-500 text-sm">{formattedDate}</p>
            <h1>{post.title}</h1>
            <Markdown {...markdownOptions}>{markdown}</Markdown>
          </article>
          <NextPostNavigation currentSlug={params.slug} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
