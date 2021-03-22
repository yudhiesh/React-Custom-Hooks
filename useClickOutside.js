import React, { useState } from "react";

function useClickOutsideNoCallback(ref, callback) {
  const callbackRef = React.useRef();
  callbackRef.current = callback;

  const handleClick = (e) => {
    if (!ref.current?.contains(e.target) && callback) {
      callbackRef.current(e);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callbackRef]);
}

function useClickOutside(ref, callback) {
  const handleClick = (e) => {
    if (!ref.current?.contains(e.target) && callback) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
}

function App() {
  const menuRef = useRef();
  const [close, setClose] = useState(false);

  // Prevent unnecessary rerenders of the
  const onClickOutsideCallback = React.useCallback(() => setClose(true), []);

  // No need to use React.useCallback()
  const onClickOutsideNoCallback = () => setClose(true);

  useClickOutside(menuRef, onClickOutsideCallback);
  useClickOutsideNoCallback(menuRef, onClickOutsideNoCallback);
}
