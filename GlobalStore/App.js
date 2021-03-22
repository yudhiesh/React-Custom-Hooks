import {TodosProvider} from "./TodoStore"
import Todos from "./Todos";


function App() {
  return (
    <TodosProvider>
      <Todos />
      <TodosProvider>
  );
}
