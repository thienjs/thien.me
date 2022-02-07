import useArticleReactions from '~/lib/hooks/useArticleReactions';

const Reactions = ({ slug }) => {
  const {
    hasLiked,
    hasLoved,
    hasClapped,
    hasPartied,
    reactions,
    handleIncrementLike,
    handleDecrementLike,
    handleIncrementLove,
    handleDecrementLove,
    handleIncrementClap,
    handleDecrementClap,
    handleIncrementParty,
    handleDecrementParty
  } = useArticleReactions(slug);

  return (
    <div className="grid grid-cols-4 md:grid-cols-2 gap-6 justify-between items-center mt-6">
      <ReactionCard
        isActive={hasLiked}
        incrementCB={handleIncrementLike}
        decrementCB={handleDecrementLike}
      >
        <span className="text-4xl">👍</span>
        <span className="text-xl font-semibold">{reactions?.like_count}</span>
        <span className="text-sm">LIKE</span>
      </ReactionCard>

      <ReactionCard
        isActive={hasLoved}
        incrementCB={handleIncrementLove}
        decrementCB={handleDecrementLove}
      >
        <span className="text-4xl">❤️</span>
        <span className="text-xl font-semibold">{reactions?.love_count}</span>
        <span className="text-sm uppercase">LOVE</span>
      </ReactionCard>

      <ReactionCard
        isActive={hasClapped}
        incrementCB={handleIncrementClap}
        decrementCB={handleDecrementClap}
      >
        <span className="text-4xl">👏</span>
        <span className="text-xl font-semibold">{reactions?.clap_count}</span>
        <span className="text-sm uppercase">CLAP</span>
      </ReactionCard>

      <ReactionCard
        isActive={hasPartied}
        incrementCB={handleIncrementParty}
        decrementCB={handleDecrementParty}
      >
        <span className="text-4xl">🎉</span>
        <span className="text-xl font-semibold">{reactions?.party_count}</span>
        <span className="text-sm uppercase">PARTY</span>
      </ReactionCard>
    </div>
  );
};

export default Reactions;

function ReactionCard({ isActive, incrementCB, decrementCB, children }) {
  return (
    <div
      role="button"
      onClick={isActive ? () => decrementCB() : () => incrementCB()}
      className={`${
        isActive
          ? 'bg-gray-300 dark:bg-gray-800'
          : 'bg-gray-100 dark:bg-zinc-700'
      } flex-1 py-4 rounded-md flex flex-col items-center general-ring-state`}
    >
      {children}
    </div>
  );
}