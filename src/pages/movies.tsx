import React from 'react'
import type { GetStaticProps } from 'next'
import { useState } from 'react'

import { getMovies } from '~/lib/notion'
import { generateKey } from 'crypto'

const MoviesPage = ({ movies }) => {
  const [movie, setMovie] = useState(null)
  const chooseMovie = () => {
    const randomNumber = Math.floor(Math.random() * movies.length)
    setMovie(movies[randomNumber])
  }
  return (
    <div>
      <button onClick={chooseMovie}>choose movie</button>
      {movie && <pre>{JSON.stringify(movie, null, 2)}</pre>}
    </div>
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
