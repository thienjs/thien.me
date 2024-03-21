"use client";
import Typewriter from 'typewriter-effect'

export default function TypewriterEffect({ string }: { string: string }) {
  return (
    <p className="font-mono">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(string).start()
        }}
        options={{
          delay: 50,
        }}
      />
    </p>
  )
}