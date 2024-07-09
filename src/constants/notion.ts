// lib/notion.ts
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getDatabaseTitles = async (databaseId: string) => {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0]?.text?.content || "Untitled",
      created_time: new Date(page.created_time),
    };
  });
};
