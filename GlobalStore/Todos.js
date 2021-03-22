import useStore from "./StoreProvider";

export default function Todos() {
  const [{ todos }, dispatch] = useStore();

  const addTodo = () =>
    dispatch({
      type: "addTodo",
      todo: {
        name: "New Todo",
      },
    });

  return (
    <div>
      {todos.map((todo) => {
        <div>{todo}</div>;
      })}
    </div>
  );
}
