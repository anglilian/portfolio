import Link from "next/link";
import classNames from "classnames";

interface NavLinkProps {
  href: string;
  label: string;
  isMobile?: boolean;
  currentPath: string;
}

const NavLink = ({
  href,
  label,
  isMobile = false,
  currentPath,
}: NavLinkProps) => {
  return (
    <li className={`py-2 ${isMobile ? "border-b md:hidden" : ""}`}>
      <Link
        href={href}
        className={classNames("nav-link", {
          "block text-center": isMobile,
          "text-black": currentPath === href,
          "text-gray-400": currentPath !== href,
        })}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
