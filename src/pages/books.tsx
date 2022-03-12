import { GetStaticProps } from "next";

import Airtable from "airtable";

import { Book as BookType } from "~/types/book";
import Suggest from "~/components/book/suggest";

type Props = {
  reading: BookType[];
  favorites: BookType[];
  completed: BookType[];
  wishing: BookType[];
};

const Books = ({ reading, favorites, completed, wishing }: Props) => {
  return (
    <div>
      <div>
        <div>Books.</div>
        <p>
          A collection of interesting books that I read or look forward to
          reading them.
        </p>
        <Suggest />
      </div>

      <div>
        <div>Currently reading</div>
        <div>
          {reading.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div>
        <div>Favorites</div>
        <div>
          {favorites.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div>
        <div>Wishlist</div>
        <div>
          {wishing.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div>
        <div>Read</div>
        <div>
          {completed.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const booksBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BOOKS_BASE_ID
  );

  const books = (
    await booksBase("Books")
      .select({
        view: "Grid view",
      })
      .all()
  ).map(
    ({ fields, id }) =>
      ({
        id,
        title: fields["Title"],
        author: fields["Author"],
        state: fields["State"],
        cover: fields["Cover"][0]["thumbnails"]["large"]["url"],
        link: fields["Link"] ?? null,
      } as BookType)
  );

  return {
    props: {
      reading: books.filter(({ state }) => state === "Reading"),
      completed: books.filter(({ state }) => state === "Completed"),
      favorites: books.filter(({ state }) => state === "Favorite"),
      wishing: books.filter(({ state }) => state === "Wish"),
    },
    revalidate: 60 * 60,
  };
};

export default Books;