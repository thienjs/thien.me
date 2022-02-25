import Link from 'next/link'

type ContactLinkProps = {
  title: string
  href: string
  icon: string
}

const ContactLink = ({ title, href, icon }: ContactLinkProps) => {
  return (
    <li className="duration-250 mr-2  inline  cursor-pointer text-4xl transition-colors ease-in hover:text-gray-400 sm:text-6xl md:text-5xl lg:text-6xl">
      <span className="duration-250 transition-colors ease-in hover:text-cyan-500 dark:hover:text-cyan-400">
        {icon}
      </span>
      <span className="font-light  opacity-50  ">@</span>
      <Link href={href}>
        <a className="duration-250 font-mono  transition-colors ease-in hover:text-gray-500 ">
          {title}
        </a>
      </Link>
    </li>
  )
}

export default ContactLink
