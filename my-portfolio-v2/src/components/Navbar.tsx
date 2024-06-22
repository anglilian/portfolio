"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/../public/images/logo-03.png";
import classNames from "classnames";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center max-h-10">
        <Link href="/" passHref>
          <div className="flex items-center h-full">
            <div className="relative h-full w-auto">
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
        <ul className="flex space-x-8">
          <li>
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
          <li>
            <Link
              href="#projects"
              className={classNames("nav-link", {
                "text-black": pathname === "/projects",
                "text-gray-400": pathname !== "/projects",
              })}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={classNames("nav-link", {
                "text-black": pathname === "/about",
                "text-gray-400": pathname !== "/about",
              })}
            >
              About me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
