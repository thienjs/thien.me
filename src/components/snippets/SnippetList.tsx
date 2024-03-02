import { Snippet } from '~/lib/types'
import { SnippetCard } from '~/components/snippets/SnippetCard'

type Props = {
  snippets: Snippet[]
}

export function SnippetList({ snippets }) {
  return (
    <div className="">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.title} snippet={snippet} />
      ))}
    </div>
  )
}
