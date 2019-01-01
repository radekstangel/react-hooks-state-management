import React, { useContext } from "react";
import { TOGGLE_TODO } from "reducer";
import { Context } from "context";

const Todo = ({ id, completed, text }) => {
  const { dispatch } = useContext(Context);
  return (
    <li
      onClick={() =>
        dispatch({
          type: TOGGLE_TODO,
          payload: { id, completed: !completed }
        })
      }
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
