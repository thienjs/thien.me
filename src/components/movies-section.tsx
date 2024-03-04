import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export default function MoviesSection({
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
}: {
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
}) {
  const mediaData = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      image: '/movie-posters/shawshank-redemption.jpg',
      review: 'awesome',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      id: 2,
      title: 'Baby Driver',
      image: '/movie-posters/baby-driver.jpg',
      review: '',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      id: 3,
      title: 'Back to the Future',
      image: '/movie-posters/back-to-the-future.jpg',
      review: '',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      id: 4,
      title: 'Ballad of Buster Scruggs',
      image: '/movie-posters/ballad-of-buster-scruggs.jpg',
      review: '',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      id: 5,
      title: 'Bridesmaids',
      image: '/movie-posters/bridesmaids.jpg',
      review: '',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      id: 6,
      title: 'Inception',
      image: '/movie-posters/inception.jpg',
      review: '',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
    {
      id: 7,
      title: 'A Star Is Born',
      image: '/movie-posters/star-is-born.jpg',
      review: '',
      rating: 5,
      url: 'https://www.imdb.com/title/tt0111161/',
    },
  ]

  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = useState(false)

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current && !start) {
        const scrollerContent = Array.from(scrollerRef.current.children)

        // Check if items are not duplicated already
        if (scrollerContent.length === mediaData.length) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true)
            if (scrollerRef.current) {
              scrollerRef.current.appendChild(duplicatedItem)
            }
          })

          const getDirection = () => {
            if (containerRef.current) {
              if (direction === 'left') {
                containerRef.current.style.setProperty(
                  '--animation-direction',
                  'forwards'
                )
              } else {
                containerRef.current.style.setProperty(
                  '--animation-direction',
                  'reverse'
                )
              }
            }
          }

          const getSpeed = () => {
            if (containerRef.current) {
              if (speed === 'fast') {
                containerRef.current.style.setProperty(
                  '--animation-duration',
                  '20s'
                )
              } else {
                containerRef.current.style.setProperty(
                  '--animation-duration',
                  '80s'
                )
              }
            }
          }

          getDirection()
          getSpeed()
          setStart(true)
        }
      }
    }

    addAnimation()
  }, [direction, mediaData.length, speed, start])

  return (
    <div
      ref={containerRef}
      className={twMerge(
        'scroller group relative z-20 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {mediaData.map((media, idx) => (
          <Tilt
            key={idx}
            glareEnable
            glarePosition="all"
            glareMaxOpacity={0.1}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <a href={media.url} target="_blank">
              <Image
                src={media.image}
                width={200}
                height={200}
                priority
                quality={100}
                alt={media.title}
                className="h-full w-44 rounded-md object-cover"
              />
            </a>
          </Tilt>
        ))}
      </ul>
    </div>
  )
}
