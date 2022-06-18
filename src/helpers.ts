import {TodoType} from "./types";
import {v4 as unqId} from "uuid";

export const getSavedTodos = () => {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : []
}

export const updateTodos = (data: TodoType[]) => {
  localStorage.setItem("todos", JSON.stringify(data));
}

export const createTodoObj = (value: string) => {
  return {
    id: unqId(),
    title: value,
    date: new Date().toLocaleString(),
    checked: false,
  }
}