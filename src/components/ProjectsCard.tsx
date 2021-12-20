
import Image from "next/image";
import Link from 'next/link'
import { Project, projects } from 'data/projects'

const ProjectCard = ({ title, live, image }: Project) => {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8">

    <div className="">
      <Link href="/">
        <a>{title}</a>
      </Link>
    </div>
    </div>
  )
}

export default ProjectCard;