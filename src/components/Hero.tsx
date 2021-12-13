import Image from "next/image"
import profile from '../../public/notion-me.png'

export default function Hero() {
  return (
        <div>
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there,I'm Thien 
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                          
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
            <p>I'm passionate about creating elegant solutions for the modern world through design and technology. </p>
        </div>
  )
}
