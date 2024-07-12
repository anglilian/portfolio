import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import {
  ListBlockChildrenResponse,
  PageObjectResponse,
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const isFullBlockObjectResponse = (
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is BlockObjectResponse => {
  return "type" in block;
};

const getBlockChildren = async (blockId: string) => {
  let results: Array<BlockObjectResponse | PartialBlockObjectResponse> = [];
  let cursor: string | undefined;

  do {
    const blocksResponse = (await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 50,
    })) as ListBlockChildrenResponse;

    results = results.concat(blocksResponse.results);
    cursor = blocksResponse.next_cursor;
  } while (cursor);

  return results;
};

const getPageContent = async (pageId: string) => {
  // Fetch the page properties
  const response = (await notion.pages.retrieve({
    page_id: pageId,
  })) as PageObjectResponse;

  // Safely access the title property
  const titleProperty = response.properties["Name"];
  let title = "Untitled";
  if (titleProperty && titleProperty.type === "title") {
    title = titleProperty.title[0]?.plain_text || "Untitled";
  }

  // Fetch the page content blocks with pagination handling
  const blocks = await getBlockChildren(pageId);

  // Fetch children for toggle blocks
  const blocksWithChildren = await Promise.all(
    blocks.map(async (block) => {
      if (isFullBlockObjectResponse(block) && block.type === "toggle") {
        const children = await getBlockChildren(block.id);
        return {
          ...block,
          toggle: {
            ...block.toggle,
            children,
          },
        };
      }
      return block;
    })
  );

  return { title, blocks: blocksWithChildren };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const pageContent = await getPageContent(id as string);
    res.status(200).json(pageContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch page content from Notion" });
  }
}
