import fs from 'fs';

import { getAllPosts } from '../utils/mdxUtils';

const stringifyPosts = (locale: 'en' | 'ja') =>
  `export const posts = ${JSON.stringify(
    getAllPosts(
      [
        'slug',
        'title',
        'description',
        'ingredients',
        'directions',
        'tips',
        'content',
      ],
      locale
    ).map((post) => ({
      slug: post.slug,
      title: post.title.toLowerCase(),
      description: post.description.toLowerCase(),
      ingredients: post.ingredients.toString().toLowerCase(),
      directions: post.directions.toString().toLowerCase(),
      tips: post.tips?.toString().toLowerCase(),
      content: post.content.toLowerCase(),
    }))
  )}`;

fs.writeFile('_cache/posts-en.ts', stringifyPosts('en'), (err) => {
  if (err) return console.log(err);
  console.log('English posts cached.');
});

fs.writeFile('_cache/posts-ja.ts', stringifyPosts('ja'), (err) => {
  if (err) return console.log(err);
  console.log('Japanese posts cached.');
});
