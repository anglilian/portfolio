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
  return (
    <div className="flex-row">
      <Link
        href={`/blog/${post.slug}`}
        className="no-underline hover:no-underline"
        prefetch={true}
      >
        <p className="text-black hover:text-orange-500 transition-colors">
          {post.title}
        </p>
      </Link>
    </div>
  );
};

export default BlogCard;
