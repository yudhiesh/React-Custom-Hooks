import React from "react";

function useClickInside(ref, callback) {
  React.useEffect(() => {
    const handleClickInside = (e) => {
      if (ref?.current?.contains(e.target) && callback) {
        callback(e);
      }
    };
    document.addEventListener("click", handleClickInside);
    return () => {
      document.removeEventListener("click", handleClickInside);
    };
  }, [ref, callback]);
}

function useClickInsideNoCallback(ref, callback) {
  const callbackRef = React.useRef();
  callbackRef.current = callback;

  React.useEffect(() => {
    const handleClickInside = (e) => {
      if (ref?.current?.contains(e.target) && callback) {
        callbackRef.current(e);
      }
    };
    document.addEventListener("click", handleClickInside);
    return () => {
      document.removeEventListener("click", handleClickInside);
    };
  }, [ref, callbackRef]);
}
