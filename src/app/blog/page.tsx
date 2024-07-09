"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Page = {
  id: string;
  title: string;
  created_time: Date;
};

export default function Blog() {
  const [pages, setPages] = useState<{ [key: string]: Page[] }>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch("/api/notion");
      const data = await response.json();
      // Convert created_time strings to Date objects
      const pagesWithDate = data.map((page: any) => ({
        ...page,
        created_time: new Date(page.created_time),
      }));
      // Sort pages by created_time in descending order
      const sortedPages = pagesWithDate.sort(
        (
          a: { created_time: { getTime: () => number } },
          b: { created_time: { getTime: () => number } }
        ) => b.created_time.getTime() - a.created_time.getTime()
      );

      // Group pages by year
      const groupedPages: { [key: string]: Page[] } = {};
      sortedPages.forEach((page: Page) => {
        const year = page.created_time.getFullYear().toString();
        if (!groupedPages[year]) {
          groupedPages[year] = [];
        }
        groupedPages[year].push(page);
      });

      setPages(groupedPages);
      setLoading(false);
    };

    fetchPages();
  }, []);

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    return { day, month };
  };

  const handleTitleClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center overflow-hidden m-8 space-y-4">
      <div className="flex flex-col justify-center items-center space-y-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {Object.keys(pages)
              .sort((a, b) => parseInt(b) - parseInt(a))
              .map((year) => (
                <div key={year}>
                  <h2 className="text-xl font-semibold mt-6">{year}</h2>
                  <div className="space-y-2">
                    {pages[year].map((page) => (
                      <div
                        key={page.id}
                        className="flex flex-row items-center space-x-4 cursor-pointer"
                        onClick={() => handleTitleClick(page.id)}
                      >
                        <div className="flex flex-col items-center justify-center w-12 h-12 border-2 border-black text-black rounded-full">
                          <span className="text-xl font-bold">
                            {formatDate(page.created_time).day}
                          </span>
                          <span className="text-sm">
                            {formatDate(page.created_time).month}
                          </span>
                        </div>
                        <h1 className="text-lg font-medium">{page.title}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
