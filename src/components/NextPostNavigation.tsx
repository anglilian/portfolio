import Link from "next/link";
import { getPublishedBlogPosts } from "@/constants/notion-service";

type NextPostNavigationProps = {
  currentSlug: string;
};

export default async function NextPostNavigation({
  currentSlug,
}: NextPostNavigationProps) {
  // Get all published posts
  const posts = await getPublishedBlogPosts();

  // Filter out the current post and get a random post
  const otherPosts = posts.filter((post) => post.slug !== currentSlug);
  const randomPost = otherPosts[Math.floor(Math.random() * otherPosts.length)];

  if (!randomPost) return null;

  return (
    <div className="max-w-prose w-full flex justify-end items-center space-x-2 text-sm mt-8">
      <Link
        href={`/blog/${randomPost.slug}`}
        className="flex items-center space-x-2"
      >
        <span>{randomPost.title}</span>
      </Link>
      <span className="text-xl no-underline hover:no-underline text-orange-500">
        &rarr;
      </span>
    </div>
  );
}
