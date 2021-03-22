import React from "react";

export default function makeStore(userReducer, initialState) {
  const storeContext = React.createContext();
  const dispatchContext = React.createContext();

  try {
    initialState = JSON.parse(localStorage.getItem(key)) || initialState;
  } catch {}

  const reducer = (state, action) => {
    const newState = userReducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };
  function useStore() {
    return React.useContext(storeContext);
  }

  function useDispatch() {
    return React.useContext(dispatchContext);
  }
  return [StoreProvider, useDispatch, useStore];
}
