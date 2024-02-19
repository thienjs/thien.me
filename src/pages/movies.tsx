import React from 'react'
import type { GetStaticProps } from 'next'
import { useState } from 'react'

import { getMovies } from '~/lib/notion'
import axios from 'axios'
import { MovieCard } from '~/components/hobby/MovieCard'
import { Title, Description  } from '~/components/ui/typography'

const MoviesPage = ({ movies }) => {
  const [movie, setMovie] = useState(null)
  const chooseMovie = () => {
    const randomNumber = Math.floor(Math.random() * movies.length)
    setMovie(movies[randomNumber])
  }
  const handleUpdate = async () => {
    const { data } = await axios.post('/api/mark-as-watched', {
      id: movie.id,
      isWatched: true,
    })

    console.log(data)
  }

  return (
    <>
      <Title>Movies</Title>
      <button onClick={chooseMovie}>choose movie</button>
      <pre>
        
        {movie && movie.title}
        </pre>

      <button onClick={handleUpdate}>Watch!</button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const moviesdata = await getMovies(process.env.NOTION_MOVIES_ID)

  const movies = moviesdata.map((movie: any) => ({
    id: movie.id,
    title: movie.properties.Title.title[0].plain_text,
    genre: movie.properties.Genre.multi_select.map(
      (genre) => genre.name
    )
  }))
  return {
    props: {
      movies,
    },
  }
}
export default MoviesPage
