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

  const renderRichText = (richTextArray: any[]) => {
    return richTextArray.map((textItem, index) => {
      const { annotations, text } = textItem;
      let className = "";

      if (annotations.bold) className += " font-bold";
      if (annotations.italic) className += " italic";
      if (annotations.underline) className += " underline";

      return (
        <span key={index} className={className}>
          {text.link ? (
            <a href={text.link.url}>{text.content}</a>
          ) : (
            text.content
          )}
        </span>
      );
    });
  };

  switch (type) {
    case "paragraph":
      return (
        <p key={id} className="pt-2">
          {renderRichText(value.rich_text)}
        </p>
      );
    case "heading_1":
      return (
        <h1 key={id} className="text-4xl pt-8 font-semibold">
          {renderRichText(value.rich_text)}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id} className="text-2xl pt-6 font-semibold">
          {renderRichText(value.rich_text)}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id} className="text-xl pt-4 font-semibold">
          {renderRichText(value.rich_text)}
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li key={id} className="list-disc list-inside pt-1">
          {renderRichText(value.rich_text)}
          {value.children && (
            <ul className="pl-4">
              {value.children.map((child: any) => renderBlock(child))}
            </ul>
          )}
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={id} className="list-decimal list-inside pt-1">
          {renderRichText(value.rich_text)}
          {value.children && (
            <ol className="pl-4">
              {value.children.map((child: any) => renderBlock(child))}
            </ol>
          )}
        </li>
      );
    case "callout":
      return (
        <div
          key={id}
          className="flex items-center bg-gray-100 p-4 rounded-md shadow-md"
        >
          <div className="mr-2">{value.icon.emoji}</div>
          <div>{renderRichText(value.rich_text)}</div>
        </div>
      );
    case "toggle":
      return (
        <details
          key={id}
          className="mt-4 pt-4 bg-gray-100 p-4 rounded-md shadow-sm"
        >
          <summary className="cursor-pointer">
            {renderRichText(value.rich_text)}
          </summary>
          <div className="ml-4 mt-2 space-y-2">
            {value.children?.map((child: any) => renderBlock(child))}
          </div>
        </details>
      );
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
          // Log only the toggle blocks to inspect their structure
          data.blocks.forEach((block: any) => {
            if (block.type === "toggle") {
              console.log("Toggle Block:", block);
            }
          });
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
        <div>
          {pageContent.blocks.map((block) => {
            if (block.type === "bulleted_list") {
              return (
                <ul key={block.id} className="list-disc list-inside pl-5">
                  {block.items.map((item: any) => renderBlock(item))}
                </ul>
              );
            }
            if (block.type === "numbered_list") {
              return (
                <ol key={block.id} className="list-decimal list-inside pl-5">
                  {block.items.map((item: any) => renderBlock(item))}
                </ol>
              );
            }
            return renderBlock(block);
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
