
import Image from "next/image";
import Link from 'next/link'
import { Project, projects } from 'data/projects'

const ProjectCard = ({ title, live, image }: Project) => {
  return (
    <div className="border-2 p-4 rounded-md border-opacity-60 dark:border-cyan-500 border-gray-200 max-w-3xl mb-2">
    <div className="flex flex-col">
      <Link href="/">
        <a>{title}</a>
      </Link>
    </div>
    </div>
  )
}

export default ProjectCard;