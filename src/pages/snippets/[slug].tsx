import { getPublishedSnippets, getSnippetPage } from "~/lib/notion";
import { Fragment, useEffect } from 'react';
import { Client } from '@notionhq/client';
import siteMetadata from '~/data/siteMetadata';
import slugify from 'slugify';
import { useRouter } from 'next/router';

import Layout from "~/components/ui/Layout";
import { AnchorLink } from "~/components/AnchorLink";
import Image from "next/image";
import { CodeBlock } from '~/components/Codeblock';
import { Callout } from "~/components/Callout";
import { YoutubeEmbed } from "~/components/YoutubeEmbed";

import { GetStaticPaths, GetStaticProps } from 'next';


export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? 'font-bold' : null,
          italic ? 'italic' : null,
          code
            ? 'bg-indigo-200 dark:bg-indigo-900 dark:bg-opacity-50 text-indigo-500 dark:text-indigo-200 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base'
            : null,
          strikethrough ? 'line-through' : null,
          underline ? 'underline' : null
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export function renderBlocks(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label
            htmlFor={id}
            className="flex items-center justify-start space-x-3"
          >
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption =
        value.caption.length >= 1 ? value.caption[0].plain_text : '';
      return (
        <figure className="mt-0">
          <Image
            className="rounded-xl"
            objectFit="fill"
            width={1200}
            height={684}
            alt={
              caption
                ? caption
                : 'A visual depiction of what is being written about'
            }
            src={src}
          />
          {caption && (
            <figcaption className="text-center">{caption}</figcaption>
          )}
        </figure>
      );
    case 'code':
      return (
        <div className="">
          <CodeBlock
            language={value.language}
            code={value.text[0].text.content}
            
          />
        </div>
      );
    case 'callout':
      return (
        <Callout>
          {value.icon && <span>{value.icon.emoji}</span>}
          <div>
            <Text text={value.text} />
          </div>
        </Callout>
      );
    case 'embed':
      const codePenEmbedKey = value.url.slice(value.url.lastIndexOf('/') + 1);
      return (
        <div>
          <iframe
            height="600"
            className="w-full"
            scrolling="no"
            title="Postage from Bag End"
            src={`https://codepen.io/thienjs/embed/preview/${codePenEmbedKey}?default-tab=result`}
            frameBorder="no"
            loading="lazy"
            allowFullScreen={true}
          >
            See the Pen <a href={value.url}></a> by Thien Tran (<a href="https://codepen.io/thienjs">@thienjs</a>)
            on <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      );
    case 'table_of_contents':
      return <div>TOC</div>;
    case 'video':
      return <YoutubeEmbed url={value.external.url} />;
    case 'quote':
      return (
        <blockquote className="p-4 rounded-r-lg">
          <Text text={value.text} />
        </blockquote>
      );
    case 'divider':
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
}

const SnippetPage = ({
  content,
  title,
  coverImage,
  slug,
  publishedDate,
  lastEditedAt,
  summary,
}) => {
  const { push } = useRouter();
  const publishedOn = new Date(publishedDate).toLocaleDateString(
    siteMetadata.locale,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  const modifiedDate = new Date(lastEditedAt).toLocaleDateString(
    siteMetadata.locale,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );



  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  return (
    <Layout

    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <article className="col-span-9 mt-12">
          <div className="space-y-12">
            <div>
              <h1 className="text-2xl text-left md:text-5xl">{title}</h1>
              <div className="text-left">
                <div className="flex mb-2 space-x-2 text-lg">
                  <p className="m-0 text-lg md:text-xl">{publishedOn}</p>

                </div>
                {publishedOn !== modifiedDate && (
                  <p className="mt-0 text-sm text-slate-500 md:text-base dark:text-slate-500">
                    (Updated on {modifiedDate})
                  </p>
                )}
              </div>
            </div>

            {content.map((block) => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}

          </div>
        </article>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const data: any = await getPublishedSnippets(process.env.NOTION_SNIPPETS_DB_ID);

  data.forEach((result) => {
    if (result.object === 'page') {
      paths.push({
        params: {
          slug: slugify(
            result.properties.Name.title[0].plain_text
          ).toLowerCase()
        }
      });
    }
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  let content = [];
  let snippetTitle = '';
  let publishedDate = null;
  let lastEditedAt = null;
  let coverImage = null;
  let summary = null;



  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const data: any = await getPublishedSnippets(process.env.NOTION_SNIPPETS_DB_ID);

  const page: any = getSnippetPage(data, slug);

  snippetTitle = page.properties.Name.title[0].plain_text;
  publishedDate = page.properties.Published.date.start;
  lastEditedAt = page.properties.LastEdited.last_edited_time;
  summary = page.properties.Summary?.rich_text[0]?.plain_text;
  coverImage =
    page.properties?.coverImage?.files[0]?.file?.url ||
    page.properties.coverImage?.files[0]?.external?.url ||
    'https://via.placeholder.com/600x400.png';



  let blocks = await notion.blocks.children.list({
    block_id: page.id
  });

  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: blocks.next_cursor
    });

    content = [...content, ...blocks.results];
  }

  return {
    props: {
      content,
      title: snippetTitle,
      publishedDate,
      lastEditedAt,
      slug,
      coverImage,
      summary,
    },
    revalidate: 30
  };
};

export default SnippetPage;