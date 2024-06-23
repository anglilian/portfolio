import type { NextApiRequest, NextApiResponse } from "next";
import { getProjectsMetadata } from "@/lib/getProjectsMetadata";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("API handler called");
  const metadata = await getProjectsMetadata();
  console.log("Fetched metadata:", metadata);
  res.status(200).json(metadata);
}
