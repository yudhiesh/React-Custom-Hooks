import React from "react";

// Provides a boolean state variable that can be toggled between its two states.
const useToggler = (initialState) => {
  const [value, setValue] = React.useState(initialState);

  const toggleValue = React.useCallback(() => setValue((prev) => !prev), []);

  return [value, toggleValue];
};
