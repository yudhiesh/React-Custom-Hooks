import makeStore from "./makeStore";

const todosReducer = (state, action) => {
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

const [TodosProvider, useTodos, useTodosDispatch] = makeStore(todosReducer, []);

export { TodosProvider, useTodos, useTodosDispatch };
