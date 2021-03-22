import useStore from "./StoreProvider";

export default function Todos() {
  const [{ todos }, setStore] = useStore();

  const addTodos = () => {
    setStore((old) => ({
      ...old,
      todos: [...old.todos, { name: "New Todo" }],
    }));
  };
  return <div>{todos}</div>;
}
