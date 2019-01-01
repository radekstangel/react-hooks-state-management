import React, { useReducer, createContext } from "react";
import toDoReducer, { VisibilityFilters } from "reducer";

const Context = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function ContextProvider(props) {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
export { Context, ContextProvider };
