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
} from 'react-icons/si'

export default function TechStack() {
  return (
    <div className='font-semibold '>
      <h2>My Current Stack</h2>
    <div className="flex my-6 flex-wrap justify-evenly h-18 ">
      <SiTypescript size={40} />
      <SiTailwindcss size={40}/>
      <SiNotion  size={40}/>
      <SiReact size={40}/>
      <SiNextdotjs size={40} />
      <IoLogoVercel size={40} />
      <SiMarkdown size={40} />
      <SiNodedotjs size={40} />
    </div>
    <h2>Other Tech Skills</h2>
    <div className='flex my-6 justify-evenly'>
      <SiJavascript size={40} />
      <SiPrettier size={40}/>
      <SiGit size={40} />
      <SiRedux size={40}/>
      <SiMongodb size={40} />
      <SiGoogleanalytics size={40} />

      <SiSass size={40}/>
      <SiFirebase size={40}/>
    </div>
    </div>
  )
}
