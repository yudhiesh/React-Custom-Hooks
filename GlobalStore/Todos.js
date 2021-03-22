import Todo from "./Todo";
export default function Todos() {
  const dispatch = useDispatch();
  const { todos } = useStore();

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
        <Todo todo={todo} />;
      })}
    </div>
  );
}
