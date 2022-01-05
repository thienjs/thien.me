import useSWR from 'swr'
import { fetcher } from '~/lib/fetcher'
import styles from '~/styles/dashboard.module.css'

const Stat = ({ data, caption }) => {
  return (
    <a
      href="https://github.com/thienjs"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.group}
    >
      {data} {caption}
    </a>
  )
}

export default function GithubStats() {
  const { data } = useSWR('/api/github', fetcher)
  return (
    <p>
      
    </p>
  )
}
