import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};

export const getPublishedArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: {
        equals: '✅ Published'
      }
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending'
      }
    ]
  });

  return response.results;
};

export const convertToArticleList = (tableData: any) => {
  let tags: string[] = [];
  const articles = tableData.map((article: any) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      tags: article.properties.tags.multi_select.map((tag) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name];
          tags = newList;
        }
        return { name: tag.name, id: tag.id };
      }),
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      publishedDate: article.properties.Published.date.start,
      summary: article.properties?.Summary.rich_text[0]?.plain_text
    };
  });

  return { articles, tags };
};