// src/components/Navbar.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo-03.png";

const Navbar = () => {
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
        <ul className="flex space-x-4">
          <li>
            <Link href="#home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
