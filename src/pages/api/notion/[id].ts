import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import {
  GetPageResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

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

  // Fetch the page content blocks
  const blocksResponse = (await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  })) as ListBlockChildrenResponse;

  const blocks = blocksResponse.results;

  return { title, blocks };
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
    res.status(500).json({ error: "Failed to fetch page content from Notion" });
  }
}
