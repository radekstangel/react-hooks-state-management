import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";
import Footer from "components/Footer";
import { ContextProvider } from "context";
import GlobalStyles from "styles/global";

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <h1>ToDo App</h1>
      <AddTodo />
      <TodoList />
      <Footer />
    </ContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
