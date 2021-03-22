import { StoreProvider } from "./StoreProvider";
import Todos from "./Todos";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    default:
      throw new Error("Unknown action!", action);
  }
};

function App() {
  return (
    <StoreProvider reducer={reducer} initialState={initialState}>
      <Todos />
    </StoreProvider>
  );
}
