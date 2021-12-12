type Props = {
  currentPage: number;
  maxPage: number;
  setElement: React.Dispatch<React.SetStateAction<Element | null>>;
};

const Pagination: React.FC<Props> = ({
  currentPage,
  maxPage,
  setElement,
}: Props) => {
  return (
    <>
      {currentPage !== maxPage ? (
        <p ref={setElement} className="text-center dark:text-gray-500 py-4">
          Loading...
        </p>
      ) : null}
    </>
  );
};

export default Pagination;
