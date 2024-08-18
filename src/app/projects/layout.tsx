"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // Determine the appropriate max-width class based on the route
  const maxWidthClass =
    usePathname() === "/projects" ? "max-w-6xl" : "max-w-4xl";
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className={`${maxWidthClass} w-full space-y-8`}>{children}</div>
    </div>
  );
}
