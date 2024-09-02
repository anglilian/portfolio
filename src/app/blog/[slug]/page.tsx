import Link from "next/link";
import Markdown from "react-markdown";
import NotionService from "@/constants/notion-service";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown (supports tables, strikethrough, etc.)
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { GetServerSideProps } from "next";

const schema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames ?? []),
    "iframe", // Allow iframe tags
  ],
  attributes: {
    ...defaultSchema.attributes,
    iframe: [
      "src",
      "width",
      "height",
      "frameborder",
      "allow",
      "allowfullscreen",
      "allowtransparency",
    ],
  },
};

function convertMarkdownToEmbed(markdown: string): string {
  const youtubeEmbedRegex =
    /\[video\]\((https:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+))\)/g;
  const spotifyEmbedRegex =
    /\[spotify\]\((https:\/\/open\.spotify\.com\/(track|album|playlist|episode)\/[\w-]+)\)/g;

  return markdown
    .replace(youtubeEmbedRegex, (match, url, videoId) => {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
    })
    .replace(spotifyEmbedRegex, (match, url) => {
      const embedUrl = url.replace(
        "open.spotify.com/",
        "open.spotify.com/embed/"
      );
      return `<iframe src="${embedUrl}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    });
}

type PostPageProps = {
  post: any;
  markdown: string;
  nextPost: any;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();
  const postData = await notionService.getSingleBlogPost(slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  let { markdown, post } = postData;
  markdown = convertMarkdownToEmbed(markdown);

  // Find the index of the current post
  const currentIndex = posts.findIndex((p) => p.slug === slug);

  // Determine the next post; if the current post is the last one, loop back to the first post
  const nextPost =
    currentIndex !== -1 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : posts[0]; // Loop back to the first post

  return {
    props: {
      post,
      markdown,
      nextPost,
    },
  };
};

export default function PostPage({ post, markdown, nextPost }: PostPageProps) {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto relative">
        <div className="flex flex-col items-center justify-center space-y-8">
          <article className="prose">
            <h1>{post.title}</h1>
            <Markdown
              rehypePlugins={[[rehypeRaw], [rehypeSanitize, schema]]} // Pass the custom schema
              remarkPlugins={[remarkGfm]} // Support tables, task lists, etc.
            >
              {markdown}
            </Markdown>
          </article>
          {nextPost && (
            <div className="max-w-prose w-full flex justify-end items-center space-x-2 text-sm mt-8">
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center space-x-2"
              >
                <span>{nextPost.title}</span>
                <span className="text-xl">&rarr;</span>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}