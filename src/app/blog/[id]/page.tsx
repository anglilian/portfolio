"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type PageContent = {
  title: string;
  blocks: any[];
};

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p key={id} className="pt-2">
          {value.rich_text[0]?.text?.content}
        </p>
      );
    case "heading_1":
      return (
        <h1 key={id} className="text-4xl pt-8 font-semibold">
          {value.rich_text[0]?.text?.content}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id} className="text-2xl pt-6 font-semibold">
          {value.rich_text[0]?.text?.content}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id} className="text-xl pt-4 font-semibold">
          {value.rich_text[0]?.text?.content}
        </h3>
      );
    case "bulleted_list_item":
      return <li key={id}>{value.rich_text[0]?.text?.content}</li>;
    // Add more cases for other block types if needed
    default:
      return <p key={id}>Unsupported block type: {type}</p>;
  }
};

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPageContent = async () => {
        try {
          const response = await fetch(`/api/notion/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch page content");
          }
          const data = await response.json();
          setPageContent(data);
        } catch (error) {
          console.error(error);
          router.push("/404");
        } finally {
          setLoading(false);
        }
      };

      fetchPageContent();
    }
  }, [id, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pageContent) {
    return <p>Page not found</p>;
  }

  return (
    <div className="flex flex-col flex-grow justify-center items-center overflow-hidden m-8 space-y-4">
      <div className="max-w-2xl w-full space-y-8 m-8">
        <h1 className="text-4xl font-bold mb-4">{pageContent.title}</h1>
        <div>{pageContent.blocks.map((block) => renderBlock(block))}</div>
      </div>
    </div>
  );
};

export default Page;
