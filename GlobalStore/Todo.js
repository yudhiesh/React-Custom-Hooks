import useToggleTodo from "./useToggleTodo";

export default function Todo({ todo }) {
  const [toggleTodo, { isLoading, error }] = useToggleTodo();

  const handleClick = () => toggleTodo(todo.id);
  return isLoading ? (
    "Toggling..."
  ) : error ? (
    "Error!"
  ) : (
    <div onClick={handleClick}>{todo.name}</div>
  );
}
