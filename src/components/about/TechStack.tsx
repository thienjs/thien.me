import { IoLogoVercel } from 'react-icons/io5'
import {
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiSupabase,
} from 'react-icons/si'

export default function TechStack() {
  return (
    <div className="font-semibold ">
      <h2>My Current Stack</h2>
      <div className="h-18 my-6 flex flex-wrap justify-evenly text-zinc-700 dark:text-gray-200 ">
        <SiTypescript size={40} />
        <SiTailwindcss size={40} />
        <SiNotion size={40} />
        <SiReact size={40} />
        <SiNextdotjs size={40} />
        <IoLogoVercel size={40} />
        <SiNodedotjs size={40} />
        <SiPrisma size={40} />
        <SiSupabase size={40} />
      </div>
      <h2>Other Tech Skills</h2>
      <div className="my-6 flex justify-evenly text-zinc-700 dark:text-gray-200 ">
        <SiJavascript size={40} />
        <SiPrettier size={40} />
        <SiGit size={40} />
        <SiRedux size={40} />
        <SiMarkdown size={40} />
        <SiMongodb size={40} />
        <SiGoogleanalytics size={40} />

        <SiSass size={40} />
        <SiFirebase size={40} />
      </div>
    </div>
  )
}
