'use client'
import { quotes } from '~/data'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useThemeContext } from '~/hooks/useTheme'
export default function QuotesSlider() {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <Splide
      options={{
        type: 'loop',
        rewind: true,
        autoplay: true,
        interval: 7000,
        arrows: true,
        height: '28vh',
      }}
      aria-label="Slider"
    >
      {quotes.map((item) => (
        <SplideSlide
          key={item.quote}
          className="border-1 flex h-full w-full items-center justify-center rounded-md"
          style={{
            backgroundColor: systemTheme.background.secondary,
            borderColor: systemTheme.text.accent2,
          }}
        >
          <blockquote
            className="mx-auto my-auto max-w-7xl px-8 text-center"
            style={{
              color: systemTheme.text.secondary,
            }}
          >
            <p className="text-lg">{item.quote}</p>
          </blockquote>
          <p
            className="absolute bottom-6  left-60"
            style={{
              color: systemTheme.text.accent,
            }}
          >
            - {item.author}
          </p>
        </SplideSlide>
      ))}
    </Splide>
  )
}
