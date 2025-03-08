"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/../public/images/logos/logo.png";
import { navigationLinks } from "@/constants/navigationLinks";
import NavLink from "@/components/NavLink";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle initial check and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="shadow-md py-4 p-2 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-full w-auto pl-8">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={40}
              className="max-h-10 w-auto"
              priority
            />
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden pr-8 text-gray-500 hover:text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`
            flex-col md:flex-row md:space-x-8
            absolute md:static top-16 left-0 right-0
            bg-white md:bg-transparent w-full md:w-auto
            shadow-md md:shadow-none z-30
            ${isOpen || !isMobile ? "flex" : "hidden"}
          `}
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              isMobile={isMobile}
              currentPath={pathname ?? ""}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
