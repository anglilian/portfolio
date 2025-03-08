// lib/notion.ts
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NotionPost, PostPage } from "@/types/blogs";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Options } from "react-markdown";

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "iframe"],
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

export const markdownOptions: Options = {
  rehypePlugins: [rehypeRaw, [rehypeSanitize, schema], rehypeKatex],
  remarkPlugins: [remarkGfm, remarkMath],
};

function convertMarkdownToEmbed(markdown: string): string {
  const youtubeEmbedRegex =
    /\[video\]\((https:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+))\)/g;
  const spotifyEmbedRegex =
    /\[spotify\]\((https:\/\/open\.spotify\.com\/(track|album|playlist|episode)\/[\w-]+)\)/g;

  return markdown
    .replace(youtubeEmbedRegex, (match, url, videoId) => {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return `<div class="relative w-full aspect-video">
        <iframe class="absolute top-0 left-0 w-full h-full" 
          src="${embedUrl}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>`;
    })
    .replace(spotifyEmbedRegex, (match, url) => {
      const embedUrl = url.replace(
        "open.spotify.com/",
        "open.spotify.com/embed/"
      );
      return `<div class="w-full max-w-[300px] mx-auto">
        <iframe 
          src="${embedUrl}" 
          style="border-radius:12px" 
          width="100%" 
          height="380" 
          frameborder="0" 
          allowtransparency="true" 
          allow="encrypted-media">
        </iframe>
      </div>`;
    });
}

const client = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: client });

function pageToPostTransformer(page: any): NotionPost {
  return {
    id: page.id,
    slug: page.properties.Slug.formula.string,
    title: page.properties.Name.title[0].plain_text,
    date: page.properties.Created.formula.date.start,
  };
}

export async function getSingleBlogPost(
  slug: string
): Promise<PostPage | null> {
  const database = process.env.NOTION_DATABASE_ID ?? "";

  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  if (!response.results.length) {
    console.error("No results available for slug:", slug);
    return null;
  }

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  var markdown = n2m.toMarkdownString(mdBlocks).parent;
  markdown = convertMarkdownToEmbed(markdown);

  const post = pageToPostTransformer(page);

  return {
    post,
    markdown,
  };
}

export async function getPublishedBlogPosts(): Promise<NotionPost[]> {
  const database = process.env.NOTION_DATABASE_ID ?? "";

  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });

  return response.results.map((res) => {
    return pageToPostTransformer(res);
  });
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const database = process.env.NOTION_DATABASE_ID ?? "";
  const response = await client.databases.query({
    database_id: database,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((page) => pageToPostTransformer(page).slug);
}

export async function getBlogPostsBySlugs(
  slugs: string[]
): Promise<NotionPost[]> {
  const database = process.env.NOTION_DATABASE_ID ?? "";
  const response = await client.databases.query({
    database_id: database,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        {
          or: slugs.map((slug) => ({
            property: "Slug",
            formula: {
              string: {
                equals: slug,
              },
            },
          })),
        },
      ],
    },
  });

  return response.results.map((page) => pageToPostTransformer(page));
}
