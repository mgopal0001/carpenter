import { createContext } from "react";

export const ApplicationCtx = createContext({
  token: null,
  setToken: () => {},
});
