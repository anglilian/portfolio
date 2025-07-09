import { getBlogPostsBySlugs } from "@/constants/notion-service";
import BlogCard from "./BlogCard";

const FEATURED_POST_SLUGS = [
  "ai-safety-needs-more-public-facing-advocacy",
  "i-wrote-3000-words-a-day-for-35-days",
  "i-got-my-blue-belt-and-i-cant-stop-smiling",
];

export default async function BlogShowcase() {
  const posts = await getBlogPostsBySlugs(FEATURED_POST_SLUGS);

  // Sort posts to match the order in FEATURED_POST_SLUGS
  const sortedPosts = posts.sort((a, b) => {
    const aIndex = FEATURED_POST_SLUGS.indexOf(a.slug);
    const bIndex = FEATURED_POST_SLUGS.indexOf(b.slug);
    return aIndex - bIndex;
  });

  return (
    <div className="max-w-4xl w-full">
      <div className="space-y-8">
        {sortedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
