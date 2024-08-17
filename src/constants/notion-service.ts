// lib/notion.ts
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NotionPost, PostPage } from "@/types/blogs";

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_API_KEY });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPublishedBlogPosts(): Promise<NotionPost[]> {
    const database = process.env.NOTION_DATABASE_ID ?? "";

    const response = await this.client.databases.query({
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
      return NotionService.pageToPostTransformer(res);
    });
  }

  async getSingleBlogPost(slug: string): Promise<PostPage | null> {
    let post, markdown;

    const database = process.env.NOTION_DATABASE_ID ?? "";

    const response = await this.client.databases.query({
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
      return null; // Return null if no results are found
    }

    const page = response.results[0];
    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    markdown = this.n2m.toMarkdownString(mdBlocks).parent;

    post = NotionService.pageToPostTransformer(page);

    return {
      post,
      markdown,
    };
  }

  private static pageToPostTransformer(page: any): NotionPost {
    return {
      id: page.id,
      slug: page.properties.Slug.formula.string,
      title: page.properties.Name.title[0].plain_text,
      date: page.properties.Created.created_time,
    };
  }
}
