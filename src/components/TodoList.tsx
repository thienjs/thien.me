import { useCallback, useEffect, useState } from 'react';
import Alert from './ui/Alert';
import TodoItem from '../components/TodoItem';
import { useTodoContext } from '../context/TodoContext';
import { supabase } from '~/lib/supabase';

import type { User } from '@supabase/supabase-js';

type Props = {
  user: User | null;
};

export default function TodoList({ user }: Props) {
  const [newTaskText, setNewTaskText] = useState('');
  const { todos, setTodos, errorMessage, setErrorMessage } = useTodoContext();

  const fetchTodos = useCallback(async () => {
    const { data: todos, error } = await supabase
      .from('todos')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setTodos(todos ?? []);
    }
  }, [setErrorMessage, setTodos]);

  const addTodo = async (taskText: string) => {
    const task = taskText.trim();

    if (task) {
      const { data: todo, error } = await supabase
        .from('todos')
        .insert({ task, user_id: user?.id })
        .single();

      if (error) {
        setErrorMessage(error.message);
      } else {
        setTodos([...todos, todo]);
        setNewTaskText('');
      }
    }
  };

  useEffect(() => {
    fetchTodos();
    const mySubscription = supabase
      .from('todos')
      .on('*', () => {
        console.log('Change received!', fetchTodos());
      })
      .subscribe();
    return () => {
      supabase.removeSubscription(mySubscription);
    };
  }, [fetchTodos]);

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-12">Todo List.</h1>

      <div className="flex space-x-2 mb-2">
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="make coffee"
          value={newTaskText}
          onChange={(e) => {
            setErrorMessage('');
            setNewTaskText(e.target.value);
          }}
        />

        <button
          className="bg-gray-900 text-white rounded p-2"
          onClick={() => addTodo(newTaskText)}
        >
          Add
        </button>
      </div>

      {errorMessage}

      <div className="bg-white rounded">
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}