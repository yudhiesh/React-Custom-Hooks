import React from "react";

const storeContext = React.createContext();
const dispatchContext = React.createContext();

export const StoreProvider = ({ children, reducer, initialState = {} }) => {
  const [store, dispatch] = React.useReducer(reducer, initialState);

  const contextValue = React.useMemo(() => [store, dispatch], [
    store,
    dispatch,
  ]);

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

export default function useStore() {
  return React.useContext(storeContext);
}

export default function useDispatch() {
  return React.useContext(dispatchContext);
}
