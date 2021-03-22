import React from "react";

// Stores the previous state or props
const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
  // Returns the lastValue
};
