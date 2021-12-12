import Image from 'next/image';
import NextLink from './NextLink';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1280}
      height={720}
    />
  );
  return (
    <>
      {slug ? (
        <NextLink href={`/posts/${slug}`} aria-label={title}>
          {image}
        </NextLink>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
