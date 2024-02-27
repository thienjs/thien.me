import { GetStaticProps } from 'next'
import { getPublishedSnippets, convertToSnippetList } from '~/lib/notion'
import { useState, useEffect } from 'react'
import { Tag } from '~/components/blog/Tag'
import { SnippetList } from '~/components/snippets/SnippetList'
import { Title, Description } from '~/components/ui/typography'
import { motion } from 'framer-motion'
import { useThemeContext } from '~/hooks/useTheme'
export default function SnippetsPage({ snippets, tags }) {
  const { systemTheme, setTheme } = useThemeContext()
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [searchValue, setSearchValue] = useState('')

  const filteredSnippets = snippets
    .sort((a, b) => Number(new Date(b.publishedDate)))
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags.some((el) => el.name === searchValue.toLocaleLowerCase())
      )
    })

  useEffect(() => {
    setSearchValue(selectedTag)
  }, [selectedTag])

  return (
    <>
      <Title>Snippets</Title>
      <Description>collection of useful code for reference</Description>
      <div className="relative w-full">
        <input
          aria-label="Search snippets"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search snippets"
          className="block w-full rounded-md border  px-4 py-2 text-sm  focus:border-blue-500 focus:ring-cyan-500 "
          style={{
            color: systemTheme.text.primary,
            backgroundColor: systemTheme.background.secondary,
          }}
        />
        <svg
          style={{
            color: systemTheme.text.accent,
            backgroundColor: systemTheme.background.secondary,
          }}
          className="absolute right-3 top-2.5 h-5 w-5 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="no-scrollbar flex w-full items-center   justify-start">
        <ul className="my-4">
          {/* Initial tag for all topics */}
          <Tag activeTag={selectedTag} tag="" cb={() => setSelectedTag('')} />
          {tags &&
            tags.map((tag) => (
              <Tag
                activeTag={selectedTag}
                key={tag}
                tag={tag}
                cb={() => setSelectedTag(tag)}
              />
            ))}
        </ul>
      </div>
      <div className="mt-4 min-h-screen space-y-12">
        {!filteredSnippets.length && (
          <div className="mx-auto w-full  p-4">
            <p className="flex items-center justify-center text-2xl">
              No snippets found{' '}
              <span>
                <svg className="ml-3 h-7 w-7" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                  ></path>
                  <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
                  <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
                </svg>
              </span>
            </p>
          </div>
        )}
        <SnippetList snippets={filteredSnippets} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedSnippets(process.env.NOTION_SNIPPETS_DB_ID)
  const { snippets, tags } = convertToSnippetList(data)

  return {
    props: {
      snippets: snippets.slice(0),
      tags,
    },
    revalidate: 30,
  }
}
