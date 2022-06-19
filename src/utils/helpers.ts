import {v4 as unqId} from "uuid";
import {TodoType} from "../Provider/types";


export const validationRules = [
  {
    required: true,
    message: 'Please input new todo!'
  }, {
    pattern: new RegExp('^.*[a-zA-Zа-яА-Я]+.*$'),
    message: "Can not contain only digits",
  }, {
    min: 3,
    message: "Must be at least 3 characters long",
  }
]

export const getSavedTodos = () => {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
}

export const updateTodos = (data: TodoType[]) => {
  localStorage.setItem("todos", JSON.stringify(data));
}

export const createNewTodoObj = (value: string) => {
  return {
    id: unqId(),
    title: value,
    date: new Date().toLocaleString(),
    checked: false,
  };
}