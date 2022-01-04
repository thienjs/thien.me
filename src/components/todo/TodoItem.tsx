import React, { useState } from 'react'
import { Delete } from '~/components/icons/Delete'
import { Todo } from '~/types/types'

interface TodoItemProps {
  item: Todo
  deleteTodo: (id: number) => void
  complete: (id: number) => void
}
export function TodoItem({ item, deleteTodo, complete }: TodoItemProps) {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)
  return (
    <div
      className="bg-blue-50 px-4 py-2 rounded-full shadow mb-4 relative focus:outline-none"
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      {showDeleteBtn && (
        <button
          type="button"
          onClick={() => deleteTodo(item.id)}
          className="absolute top-3 right-3"
        >
          <Delete />
        </button>
      )}

      <input
        type="checkbox"
        className="h-4 w-4 mr-2 text-gray-500"
        checked={item.isCompleted}
        onChange={() => complete(item.id)}
      />
      <span className={item.isCompleted ? 'line-through' : ''}>
        {item.text}
      </span>
    </div>
  )
}
