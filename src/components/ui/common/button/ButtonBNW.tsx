import Link from 'next/link'
import * as React from 'react'

export interface IButtonProps {
  label: string
  href: string
}

export default function ButtonBNW({ label, href }: IButtonProps) {
  return (
    <Link href={href}>
      <a className="group relative inline-block px-4 py-2 font-medium">
        <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-white"></span>
        <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black dark:border-white dark:bg-black"></span>
        <span className="relative text-black group-hover:text-white dark:text-white">
          {label}
        </span>
      </a>
    </Link>
  )
}
