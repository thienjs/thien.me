
import Image from "next/image"
import profile from "../../public/notion-me.png"

const About = () => {
    return (
      <div>
        <div className="text-left content-start ">
          <Image
            src="https://github.com/thienjs.png"
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>
        <h2>hello im thien</h2>
        <p>
          i have always been around the web. from geocites to myscpace, to
          tumblr. ive always enjoyed customizing websites. during covid, i
          decided to finally learn to code. i took udemy courses and read online
          tutorials on what language to learn. I started with swift and python.
          but eventually settled with javascript. Javascript always scared me
          when i was younger. but once i learned it it was really amazing.
        </p>
      </div>
    )
}

export default About;