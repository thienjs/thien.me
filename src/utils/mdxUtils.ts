import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = join(process.cwd(), 'src/_posts');

export function parseLocale(locale?: string): 'ja' | 'en' {
  return locale === 'ja' ? 'ja' : 'en';
}

function getPostFilePaths(locale?: string): string[] {
  const lang = parseLocale(locale);

  return (
    fs
      .readdirSync(join(POSTS_PATH, `${lang}`))
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export function getPost(slug: string, locale?: string): Post {
  const lang = parseLocale(locale);
  const fullPath = join(POSTS_PATH, `${lang}`, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getPostItems(
  filePath: string,
  fields: string[] = [],
  locale?: string
): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug, locale);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], locale?: string): Items[] {
  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields, locale))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
