import Link from 'next/link'

export default function NotionCard({title, date, description, slug, id}) {
    return (
        <ol className="">

          return (
            <li key={id} className="">
              <h3 className="">
                <Link href={slug}>
                  <a>
                    {title}
                  </a>
                </Link>
              </h3>

              <p className="">{date}</p>
              <Link href={slug}>
                <a> Read Note →</a>
              </Link>
            </li>
          );
      </ol>
    )
}
