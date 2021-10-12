import { Http, HttpResponse } from "@capacitor-community/http";

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}
const resourceUrl = "http://localhost:8000/todos";

export const findAllTodos = () => {
  const options = {
    url: `${resourceUrl}`,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "Content-Type": "application/json" },
  };
  return Http.get(options);
};

export const findTodoById = (id: number) => {
  const options = {
    url: `${resourceUrl}/${id}`,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "Content-Type": "application/json" },
  };
  return Http.get(options);
};

export const createTodo = (todo: Todo) => {
  const options = {
    url: `${resourceUrl}`,
    data: todo,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "Content-Type": "application/json" },
  };
  return Http.post(options);
};

export const updateTodo = (todo: Todo) => {
  const options = {
    url: `${resourceUrl}/${todo.id}`,
    data: todo,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "Content-Type": "application/json" },
  };
  return Http.put(options);
};

export const deleteTodo = (id: number) => {
  const options = {
    url: `${resourceUrl}/${id}`,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "Content-Type": "application/json" },
  };
  return Http.del(options);
};
