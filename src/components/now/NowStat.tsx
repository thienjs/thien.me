export default function NowStat({ link, stat }) {
  return (
    <a aria-label="" target="_blank" rel="noopener noreferrer" href={link}>
      <span className="">{stat > 0 ? stat.toLocaleString() : '-'}</span>
    </a>
  )
}
