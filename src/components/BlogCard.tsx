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
    <div className="flex-row transition duration-300 hover:scale-105 ">
      <Link href={`/blog/${post.slug}`} className="no-underline">
        <p>{post.title}</p>
      </Link>
      {/* <span className="text-gray-600">{dayjs(post.date).format("LL")}</span> */}
    </div>
  );
};

export default BlogCard;
