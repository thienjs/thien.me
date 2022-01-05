import React, { FormEvent, useEffect, useState } from 'react'
import { TodoNew } from './TodoNew'
import { TodoItem } from './todoItem'
import { Todo } from '~/types/types'
import dynamic from "next/dynamic";
import { prisma } from '~/lib/prisma';
import { todo } from '@prisma/client';
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    let initialValue: Todo[] = []
    


    
    const todoList = window.localStorage.getItem('todos')
    
    
    
    
    if (todoList && todoList.length > 0) {
      initialValue = JSON.parse(todoList)
    }
    return initialValue
  })

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleCreateTodo = (todoText: string) => {
    const oldTodos = [...todos]
    oldTodos.push({
      id: Math.floor(Math.random() * 10000000),
      text: todoText,
      isCompleted: false,
    })
    setTodos(oldTodos)
  }

  const handleDeleteTodo = (todoId: number) => {
    let updatedTodos = [...todos]
    let selectedTodoIdx = todos.findIndex((todo) => todo.id === todoId)
    updatedTodos.splice(selectedTodoIdx, 1)
    setTodos(updatedTodos)
  }

  const handleComplete = (todoId: number) => {
    // clone the original array to avoid mutate by reference
    let updatedTodos = [...todos]
    // find the todo based on todo id
    let selectedTodo = todos.find((todo) => todo.id === todoId)
    // find the todo index based on todo id
    let selectedTodoIdx = todos.findIndex((todo) => todo.id === todoId)

    if (selectedTodo) {
      updatedTodos[selectedTodoIdx] = {
        ...selectedTodo,
        isCompleted: !selectedTodo.isCompleted,
      }
      setTodos(updatedTodos)
    }
  }

  return (
    <div className="bg-white shadow-md w-2/5 p-8 rounded-xl">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <hr className="mt-2" />
      <TodoNew createTodo={handleCreateTodo} />
      <div className="mt-4">
        You have {todos.filter((it) => it.isCompleted === false).length} pending
        task(s)
      </div>
      <div className="mt-4">
        {todos
          .filter((it) => it.isCompleted === false)
          .map((it) => (
            <TodoItem
              key={it.id}
              item={it}
              deleteTodo={handleDeleteTodo}
              complete={handleComplete}
            />
          ))}
      </div>
      <div className="mt-4">
        {todos
          .filter((it) => it.isCompleted === true)
          .map((it) => (
            <TodoItem
              key={it.id}
              item={it}
              deleteTodo={handleDeleteTodo}
              complete={handleComplete}
            />
          ))}
      </div>
    </div>
  )
}

export default TodoList
