import { KeyboardEvent, useEffect, useState } from 'react'

const GRID_SIZE = 20 // Number of cells in each row and column
const INITIAL_SNAKE_LENGTH = 3 // Initial length of the snake
const INITIAL_DIRECTION: Direction = 'DOWN' // Initial direction of the snake

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

type Point = {
  x: number
  y: number
}

function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>([
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ])
  const [food, setFood] = useState<Point>({ x: 0, y: 0 })
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState<boolean>(false)

  const moveSnake = (): void => {
    const newSnake = [...snake]
    const head = { ...newSnake[0] }

    switch (direction) {
      case 'UP':
        head.y -= 1
        break
      case 'DOWN':
        head.y += 1
        break
      case 'LEFT':
        head.x -= 1
        break
      case 'RIGHT':
        head.x += 1
        break
      default:
        break
    }

    // Check if game over
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true)
      return
    }

    newSnake.unshift(head)

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
      generateFood()
    } else {
      newSnake.pop()
    }

    // Update the snake state
    setSnake(newSnake)
  }

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(moveSnake, 60) // Adjust snake speed here
      return () => clearInterval(interval)
    }
  }, [snake, direction])

  useEffect(() => {
    initGame()
  }, [])

  const initGame = (): void => {
    const initialSnake: Point[] = []
    for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
      initialSnake.push({ x: i, y: 0 })
    }
    setSnake(initialSnake)
    generateFood()
  }

  const generateFood = (): void => {
    const x = Math.floor(Math.random() * GRID_SIZE)
    const y = Math.floor(Math.random() * GRID_SIZE)
    setFood({ x, y })
  }

  const changeDirection = (direction: Direction) => {
    setTimeout(() => {
      setDirection(direction)
    }, 500)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'ArrowUp' && direction !== 'DOWN') {
      setDirection('UP')
    }
    if (event.key === 'ArrowDown' && direction !== 'UP') {
      setDirection('DOWN')
    }
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') {
      setDirection('LEFT')
    }
    if (event.key === 'ArrowRight' && direction !== 'LEFT') {
      setDirection('RIGHT')
    }
  }

  return (
    <div
      className="flex h-screen items-center justify-center"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="grid-cols-20 grid-rows-20 grid border border-black">
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-red-600">
            Game Over!
          </div>
        )}
        {Array.from({ length: GRID_SIZE }).map((_, y) => (
          <div key={y} className="flex">
            {Array.from({ length: GRID_SIZE }).map((_, x) => (
              <div
                key={x}
                className={`h-5 w-5 border border-gray-200 
                ${
                  snake.some((segment) => segment.x === x && segment.y === y) &&
                  'bg-green-500'
                }
                ${food.x === x && food.y === y && 'bg-red-500'}
                `}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SnakeGame;