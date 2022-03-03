import { Snippet } from '~/lib/types'
import { SnippetCard } from '~/components/snippets/SnippetCard'

type Props = {
  snippets: Snippet[]
}

export function SnippetList({ snippets }) {
  return (
    <div className="grid list-none grid-cols-1 gap-2 md:grid-cols-2">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.title} snippet={snippet} />
      ))}
    </div>
  )
}
