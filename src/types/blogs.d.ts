export type NotionPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
};

export type PostPage = {
  post: NotionPost;
  markdown: string;
};
