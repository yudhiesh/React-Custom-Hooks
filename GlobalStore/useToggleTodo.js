import { useMutation } from "react-query";
import axios from "axios";

const getToggleTodoById = (todoId) =>
  axios
    .get(`https://example.com/todos/${todoId}/toggle`)
    .then((res) => res.data);

export function useToggleTodo() {
  const [toggleTodo, { loading: isLoading, error }] = useMutation(
    getToggleTodoById,
    {
      refetchQueries: ["todos"],
    }
  );
  return [toggleTodo, { isLoading, error }];
}
