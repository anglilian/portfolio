export interface NotionPost {
  id: string;
  properties: {
    Name: {
      title: {
        plain_text: string;
      }[];
    };
  };
}
