// pages/api/notion.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getDatabaseTitles } from "@/constants/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    res.status(500).json({ error: "NOTION_DATABASE_ID is not set" });
    return;
  }

  try {
    const titles = await getDatabaseTitles(databaseId);
    res.status(200).json(titles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Notion" });
  }
}
