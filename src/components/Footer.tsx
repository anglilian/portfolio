import IconRow from "@/components/IconRow";
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

const Footer = () => {
  return (
    <div className="space-y-6 mt-8 mb-8">
      <div className="container mx-auto flex justify-center">
        <IconRow icons={icons} />
      </div>
      <div className="text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Ang Li-Lian. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
