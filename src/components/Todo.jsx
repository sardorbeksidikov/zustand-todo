import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useBoundStore } from "../stores/useBoundStore";

const Todo = ({ todo, id }) => {
  const toggleCompleteTodo = useBoundStore((state) => state.toggleCompleteTodo);
  const deleteTodo = useBoundStore((state) => state.deleteTodo);

  const deleteHandler = () => {
    deleteTodo(todo);
  };

  const completeHandler = () => {
    toggleCompleteTodo(todo);
  };

  return (
    <div className="todo" data-testid={"todo-" + todo.id}>
      {" "}
      <li
        className={`todo-item ${todo.completed ? "completed" : ""}`}
        data-testid={"todo-text-" + todo.id}>
        {todo.text}
      </li>
      <button
        onClick={completeHandler}
        className="complete-btn"
        data-testid={"todo-complete-" + todo.id}>
        <FaCheck />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <MdDelete />
      </button>
    </div>
  );
};

export default Todo;
