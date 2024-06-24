// pages/api/listSubfolders.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const directoryPath = path.join(process.cwd(), "src", "app", "projects"); // Path to the 'projects' directory

  try {
    const files = await fs.promises.readdir(directoryPath, {
      withFileTypes: true,
    });
    const subfolders = files
      .filter((file) => file.isDirectory())
      .map((folder) => folder.name);

    res.status(200).json(subfolders);
  } catch (err) {
    console.error("Error reading directory:", err); // Log any errors
    res.status(500).json({ error: "Unable to scan directory" });
  }
}
