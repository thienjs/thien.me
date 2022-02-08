import Link from 'next/link'

type ContactLinkProps = {
  title: string;
  href: string;
  icon: string;
};

const ContactLink = ({ title, href, icon }: ContactLinkProps) => {
  return (
    <li className="cursor-pointer inline  mr-2  text-4xl sm:text-6xl md:text-5xl lg:text-6xl hover:text-gray-400 transition-colors duration-250 ease-in">
      <span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-250 ease-in">{icon}</span>
      <span className="font-light  opacity-50  ">@</span>
      <Link href={href}>
        <a className="font-mono hover:text-gray-500  transition-colors duration-250 ease-in ">{title}</a>
      </Link>
    </li>
  );
};

export default ContactLink