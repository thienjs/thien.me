import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { supabase } from '~/lib/supabase';

import type { Todo } from '~/types/todo';

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const [isComplete, setIsComplete] = useState(todo.is_complete);
  const [task, setTask] = useState(todo.task);
  const { todos, setTodos, setErrorMessage } = useTodoContext();

  const toggleIsComplete = async () => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .update({ is_complete: !isComplete })
        .eq('id', todo.id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      setIsComplete(data.is_complete);
      console.log('updated!');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const updateTask = async (taskText: string) => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .update({ task: taskText })
        .eq('id', todo.id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      setTask(data.task);
      console.log('updated!');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const updateTaskOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const taskText = e.currentTarget.value;

    if (taskText !== task) {
      e.preventDefault();
      updateTask(taskText);
    }
  };

  const updateTaskOnPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const taskText = e.currentTarget.value;

      if (taskText !== task) {
        e.preventDefault();
        updateTask(taskText);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id);
      setTodos(todos.filter((todo) => todo.id != id));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <li className="w-full hover:bg-gray-100 transition duration-150 ease-in-out">
      <div className="flex items-center px-4 py-2">
        <input
          className="cursor-pointer mr-1"
          type="checkbox"
          checked={isComplete}
          onChange={(e) => {
            e.preventDefault();
            toggleIsComplete();
          }}
        />

        <input
          className={`bg-transparent px-2 py-1 w-full text-sm leading-5 font-medium truncate ${
            isComplete ? 'line-through' : undefined
          }`}
          type="text"
          defaultValue={task}
          onBlur={updateTaskOnBlur}
          onKeyDown={updateTaskOnPressEnter}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteTodo(todo.id);
          }}
          className="w-4 h-4 ml-2 border-2 hover:border-gray-900 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="gray"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}