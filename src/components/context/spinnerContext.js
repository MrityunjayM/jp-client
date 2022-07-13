import React, { createContext, useState } from "react";

export const spinnerContext = createContext();
const { Provider } = spinnerContext;

export const SpinnerProvider = ({ children }) => {
  let [loading, setLoading] = useState(false);
  return <Provider value={{ loading, setLoading }}>{children}</Provider>;
};
