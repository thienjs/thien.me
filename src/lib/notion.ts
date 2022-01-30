import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { equal } from "assert";
import slugify from 'slugify';

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
        equals: '✅ Published',
      },
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending',
      },
    ],
  })

  return response.results
}
export const getMovies = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Watched",
      checkbox: {
        equals: false
      }
    }

  })

  return response.results
}
export const getPublishedSnippets = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: {
        equals: 'published'
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

export const getArticlePage = (data, slug) => {
  const response = data.find((result) => {
    if (result.object === 'page') {
      const resultSlug = slugify(
        result.properties.Name.title[0].plain_text
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  return response;
};
export const getSnippetPage = (data, slug) => {
  const response = data.find((result) => {
    if (result.object === 'page') {
      const resultSlug = slugify(
        result.properties.Name.title[0].plain_text
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  return response;
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
export const convertToSnippetList = (tableData: any) => {
  let tags: string[] = [];
  const snippets = tableData.map((snippet: any) => {
    return {
      title: snippet.properties.Name.title[0].plain_text,
      tags: snippet.properties.tags.multi_select.map((tag) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name];
          tags = newList;
        }
        return { name: tag.name, id: tag.id };
      }),
      coverImage:
        snippet.properties?.coverImage?.files[0]?.file?.url ||
        snippet.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      publishedDate: snippet.properties.Published.date.start,
      summary: snippet.properties?.Summary.rich_text[0]?.plain_text
    };
  });

  return { snippets, tags };
};