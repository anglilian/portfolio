"use client";

import IconRow from "@/components/IconRow";
import { usePathname } from "next/navigation";
import {
  faGithub,
  faGoodreads,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/anglilian/",
    alt: "LinkedIn",
  },
  {
    icon: faGithub,
    link: "https://github.com/anglilian",
    alt: "GitHub",
  },
  {
    icon: faGoodreads,
    link: "https://www.goodreads.com/author/show/21175190.Li_Lian_Ang",
    alt: "Goodreads",
  },
];

const FooterIcons = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <IconRow
      icons={icons}
      iconColor={isHomePage ? "text-white" : "text-gray-600"}
    />
  );
};

export default FooterIcons;
