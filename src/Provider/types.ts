export interface ProviderType {
  todos: TodoType[];
  addTodo: (value: string) => void;
  handleStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export interface TodoType {
  id: string;
  title: string;
  date: string;
  checked: boolean;
}