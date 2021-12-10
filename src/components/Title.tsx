import Image from "next/image";


interface TitleProps {
  num: number;
  title: string;
}

const Title: React.FC<TitleProps> = ({ num, title }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="flex mt-20 w-full"
    >
      <h2 className="md:text-4xl text-3xl text-text">
        {title}
      </h2>
    </div>
  );
};

export default Title;
