import { Snippet } from '~/lib/types';
import { SnippetCard } from '~/components/SnippetCard';

type Props = {
  snippets: Snippet[];
};

export function SnippetList({ snippets }) {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-3 gap-3">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.title} snippet={snippet} />
      ))}
    </div>
  );
}
