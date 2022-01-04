import React, { FormEvent, useState } from 'react'
import { PlusCircle } from '~/components/icons/PlusCircle'

interface TodoNewProps {
  createTodo: (todoText: string) => void
}

export function TodoNew({ createTodo }: TodoNewProps) {
  const [todoText, setTodoText] = useState('')
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTodo(todoText)
    setTodoText('')
  }
  return (
    <form onSubmit={onSubmit} className="relative">
      <span className="absolute top-5 right-3">
        <PlusCircle />
      </span>
      <input
        type="text"
        placeholder="Add new task"
        value={todoText}
        className="bg-blue-50 p-3 rounded-full mt-2 w-full"
        onChange={(e) => setTodoText(e.target.value)}
      />
    </form>
  )
}
