import React, {createContext, FC, useContext, useEffect, useState} from "react";
import {createNewTodoObj, getSavedTodos, updateTodos} from "../utils/helpers";
import {ProviderType, TodoType} from "./types";

const TodoContext = createContext<ProviderType>({} as ProviderType);
export const useProvider = () => useContext(TodoContext);

interface Props {
  children: React.ReactNode;
}

const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>(() => getSavedTodos());

  useEffect(() => {
    updateTodos(todos);
  }, [todos])

  const addTodo = (value: string) => {
    setTodos((prev) => [ ...prev, createNewTodoObj(value) ]);
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter(item => item.id !== id));
  }

  const handleStatus = (id: string) => {
    setTodos((prev) => prev.map(item => {
      return item.id === id ? {
        ...item,
        checked: !item.checked
      } : item;
    }));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, handleStatus }}>
      { children }
    </TodoContext.Provider>
  )
}

export default TodoProvider;