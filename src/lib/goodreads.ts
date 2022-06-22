import { default as Parser } from 'rss-parser'

const baseRss =
  'https://www.goodreads.com/review/list_rss/8539181?key=eq3J6W26JJ4YyrsS66bxtAbL_MSF4YYoTixsVWDWwH1xoFic&shelf=%23ALL%23'
const getHtmlContentField = (html: string | undefined, field: string) => {
  if (!html) {
    return null
  }

  const res = html.match(new RegExp(`  ${field}:(?<field>[^<]*)<br`))
  return res ? res[1].trim() : null
}

const asNumber = (str: string | null) =>
  str ? Number.parseInt(str.trim()) : null

export type GoodReadsReview = {
  title: string
  author: string
  rating: number
  url: string
  finishedOn: string | null
}

const parseFeed = async (
  shelf: string,
  limit: number = 10
): Promise<GoodReadsReview[]> => {
  const parser = new Parser()
  const feed = await parser.parseURL(
    `${baseRss}&shelf=${shelf}&per_page=${limit}`
  )

  const items = feed.items.length ? feed.items : [feed.item]

  return items.map((i) => ({
    title: i.title ?? '',
    url: i.link ?? '',
    finishedOn: i.pubDate ? new Date(i.pubDate).toISOString() : null,
    rating: asNumber(getHtmlContentField(i.content, 'rating')) ?? 0,
    author: getHtmlContentField(i.content, 'author') ?? '<unknown>',
  }))
}

export const getReviews = async ({
  limit,
}: {
  limit: number
}): Promise<GoodReadsReview[]> => {
  return parseFeed('read', limit)
}

export const getCurrentlyReading = async ({
  limit,
}: {
  limit: number
}): Promise<GoodReadsReview[]> => {
  return parseFeed('currently-reading', limit)
}
