import React from "react";

const context = React.createContext();

export const StoreProvider = ({ children, reducer, initialState = {} }) => {
  const [store, dispatch] = React.useReducer(reducer, initialState);

  const contextValue = React.useMemo(() => [store, dispatch], [
    store,
    dispatch,
  ]);

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default function useStore() {
  return React.useContext(context);
}
