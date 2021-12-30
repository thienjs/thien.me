import { createContext, useContext, useState } from 'react';

import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import type { Todo } from '../types/todo';

type ContextProps = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
};

const TodoContext = createContext({} as ContextProps);

export function useTodoContext(): ContextProps {
  return useContext(TodoContext);
}

export function TodoProvider({ children }: Props): ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}