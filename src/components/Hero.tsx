import Image from "next/image"
import profile from '../../public/notion-me.png'

export default function Hero() {
  return (
        <div>
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                        Hey there,I'm Thien 
                    <p className="wave"> 👋</p>
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4 pb-6">
                          Full Stack Web Devloper | Site underconstruction.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 hidden">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={150}
                        height={150}
                        placeholder="blur"
                    />
                </div>
            </div>
            <p></p>
        </div>
  )
}
