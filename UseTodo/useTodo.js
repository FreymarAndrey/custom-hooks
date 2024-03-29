import { useEffect, useReducer } from "react";
import todoReducer from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};

export default useTodo;
