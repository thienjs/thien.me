import React, { useState } from 'react'
import useSWR from 'swr'
import TimeAgo from 'react-timeago'
import {fetcher} from '~/lib/fetcher'
import ProjectCard from '~/components/Projects/ProjectCard'
import Loader from '~/components/Projects/Loader'
import { motion, LayoutGroup } from 'framer-motion'
import styles from '@/styles/projects.module.css'
import { SearchIcon } from '~/components/Icon'

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export default function ProjectList() {
  const [searchValue, setSearchValue] = useState('')
  const { data, error } = useSWR('/api/github', fetcher)
  if (error)
    return (
      <p>
        Something went wrong when trying to load the projects. If this error
        persists, please contact me.
      </p>
    )
  if (!data)
    return (
      <>
        <div className={styles.searchWrapper}>
          <input
            aria-label="Disabled Searchbar"
            type="text"
            placeholder="Not yet..."
            className={styles.search}
            disabled
          />
          <svg className={styles.searchIcon}>
            <SearchIcon />
          </svg>
          <Loader />
        </div>
      </>
    )

  const filteredProjects = Object(data.repos)
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        project.language?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => Number(b.stars) - Number(a.stars))

  return (
    <>
      <div className={styles.searchWrapper}>
        <input
          aria-label="Enabled Searchbar"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search my projects"
          className={styles.search}
        />
        <svg className={styles.searchIcon}>
          <SearchIcon />
        </svg>
      </div>
      {!filteredProjects.length && (
        <p>
          What!? That&#39;s crazy. It seems like you tried to find something I
          haven&#39;t created yet.
        </p>
      )}
      <LayoutGroup>
        <motion.div
          className={styles.cardlist}
          variants={list}
          initial="hidden"
          animate="show"
          layout
        >
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.name}
              name={p.name}
              star_count={p.stars}
              pushed_date={<TimeAgo date={p.pushed} />}
              href={p.url}
              desc={p.description}
              language={p.language}
            />
          ))}
        </motion.div>
      </LayoutGroup>
    </>
  )
}
