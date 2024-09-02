import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    res.status(400).json({ error: "Invalid URL" });
    return;
  }

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      res.status(response.status).json({ error: "Failed to fetch image" });
      return;
    }

    res.setHeader("Content-Type", contentType || "image/jpeg");
    res.setHeader("Cache-Control", "s-maxage=86400"); // Cache the image for 1 day
    const imageBuffer = await response.arrayBuffer();
    res.send(Buffer.from(imageBuffer));
  } catch (error) {
    res.status(500).json({ error: "Failed to proxy image" });
  }
}
