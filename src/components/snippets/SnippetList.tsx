import { Snippet } from '~/lib/types'
import { SnippetCard } from '~/components/snippets/SnippetCard'

type Props = {
  snippets: Snippet[]
}

export function SnippetList({ snippets }) {
  return (
    <div className="grid list-none grid-cols-1 gap-3 md:grid-cols-3">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.title} snippet={snippet} />
      ))}
    </div>
  )
}
