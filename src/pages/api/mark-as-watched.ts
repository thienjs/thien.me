import { Client } from "@notionhq/client";

const handler = async (req, res) => {
  const { id, isWatched } = req.body;

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const data = await notion.pages.update({
    page_id: id,
    properties: {
      Watched: {
        checkbox: isWatched,
      },
    },
  });

  res.send(data);
};

export default handler;