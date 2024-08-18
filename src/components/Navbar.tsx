"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/../public/images/logo.png";
import classNames from "classnames";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="shadow-md py-4 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center">
            <div className="relative h-full w-auto pl-8">
              <Image
                src={logo}
                alt="Logo"
                layout="intrinsic"
                objectFit="contain"
                className="max-h-10 w-auto"
              />
            </div>
          </div>
        </Link>
        <div className="block md:hidden pr-8">
          <button
            onClick={toggleNavbar}
            className="text-gray-500 hover:text-black focus:outline-none"
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
        </div>
        <ul
          className={`flex-col md:flex-row md:space-x-8 md:flex ${
            isOpen ? "flex" : "hidden"
          } absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent w-full md:w-auto sh md:shadow-none z-30`}
        >
          <li className="md:hidden py-2 border-b">
            <Link
              href="/"
              className={classNames("nav-link block text-center", {
                "text-black": pathname === "/",
                "text-gray-400": pathname !== "/",
              })}
              onClick={closeNavbar}
            >
              Home
            </Link>
          </li>
          <li className="md:hidden py-2 border-b">
            <Link
              href="/projects"
              className={classNames("nav-link block text-center", {
                "text-black": pathname === "/projects",
                "text-gray-400": pathname !== "/projects",
              })}
              onClick={closeNavbar}
            >
              Projects
            </Link>
          </li>
          <li className="md:hidden py-2 border-b">
            <Link
              href="/blog"
              className={classNames("nav-link block text-center", {
                "text-black": pathname === "/blog",
                "text-gray-400": pathname !== "/blog",
              })}
              onClick={closeNavbar}
            >
              Blog
            </Link>
          </li>
          <li className="md:hidden py-2">
            <Link
              href="/about"
              className={classNames("nav-link block text-center", {
                "text-black": pathname === "/about",
                "text-gray-400": pathname !== "/about",
              })}
              onClick={closeNavbar}
            >
              About
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="/"
              className={classNames("nav-link", {
                "text-black": pathname === "/",
                "text-gray-400": pathname !== "/",
              })}
            >
              Home
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="/projects"
              className={classNames("nav-link", {
                "text-black": pathname === "/projects",
                "text-gray-400": pathname !== "/projects",
              })}
            >
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="/blog"
              className={classNames("nav-link", {
                "text-black": pathname === "/blog",
                "text-gray-400": pathname !== "/blog",
              })}
            >
              Blog
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="/about"
              className={classNames("nav-link", {
                "text-black": pathname === "/about",
                "text-gray-400": pathname !== "/about",
              })}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
