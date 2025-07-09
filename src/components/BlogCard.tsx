import { NotionPost } from "@/types/blogs";
import dayjs from "dayjs";
import Link from "next/link";
import { FunctionComponent } from "react";

type BlogCardProps = {
  post: NotionPost;
};

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
  const href = post.externalLink || `/blog/${post.slug}`;
  const isExternal = !!post.externalLink;

  return (
    <div className="flex-row">
      <Link
        href={href}
        className="no-underline hover:no-underline"
        prefetch={!isExternal}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <p className="text-black hover:text-orange-500 transition-colors">
          {post.title}
          {isExternal && (
            <span className="ml-1 text-xs text-gray-500">↗</span>
          )}
        </p>
      </Link>
    </div>
  );
};

export default BlogCard;
