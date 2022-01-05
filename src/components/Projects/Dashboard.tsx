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
      So far, I collected{' '}
      <Stat data={data ? data.stars : '...'} caption="stars" />, acquired{' '}
      <Stat data={data ? data.followers : '...'} caption="followers" />, saved{' '}
      <Stat data={data ? data.starred : '...'} caption="repos" />, and
      contributed to{' '}
      <Stat data={data ? data.orgsCont : '...'} caption="organizations" />.
      Follow me or star one of my repos and watch the numbers update.
    </p>
  )
}
