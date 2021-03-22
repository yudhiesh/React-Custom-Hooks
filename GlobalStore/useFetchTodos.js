import { useQuery } from "react-query";
import axios from "axios";

const fetchTodos = () =>
  axios.get("https://example.come/todos").then((res) => res.data);

export function useTodos() {
  const { data: todos, isLoading, error } = useQuery("todos", fetchTodos);
  return { todos, isLoading, error };
}
