import * as React from 'react'

export interface IButtonProps {
  label: string
  href: string
}

export default function Button({ label, href }: IButtonProps) {
  return (
    <a
      href={href}
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black"></span>
      <span className="relative text-black dark:text-white group-hover:text-white">
        {label}
      </span>
    </a>
  )
}
