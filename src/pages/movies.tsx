import axios from 'axios'
import type { GetStaticProps } from 'next'
import React from 'react'
import { useState } from 'react'

import { MovieCard } from '~/components/hobby/MovieCard'
import { Description, Title } from '~/components/ui/typography'
import { getMovies } from '~/lib/notion'

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
      {movie && <pre>{JSON.stringify(movie, null, 2)}</pre>}

      <button onClick={handleUpdate}>Watch!</button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const moviesdata = await getMovies(process.env.NOTION_MOVIES_ID)

  const movies = moviesdata.map((movie: any) => ({
    id: movie.id,
    title: movie.properties.Title.title[0],
  }))
  return {
    props: {
      movies,
    },
  }
}
export default MoviesPage
