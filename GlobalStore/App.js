import { StoreProvider } from "./StoreProvider";
import Todos from "./Todos";

const initialState = {
  todos: [],
};

function App() {
  return (
    <StoreProvider initialState={initialState}>
      <Todos />
    </StoreProvider>
  );
}
