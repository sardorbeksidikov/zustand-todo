import Todo from "./Todo";
import { useBoundStore } from "../stores/useBoundStore";


const TodoList = () => {
  const todosArray = useBoundStore((state) => state.todosArray);
  const filterStatus = useBoundStore((state) => state.filterStatus);

  
  const filteredTodos = todosArray.filter((todo) => {
    return (
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.completed) ||
      (filterStatus === "uncompleted" && !todo.completed)
    );
  });

  return (
    <div className="todo-container" data-testid="todolist">
      <ul className="todo-list">
        {filteredTodos.map(
          (
            todo 
          ) => (
           
            <Todo todo={todo} key={todo.id} />
          )
        )};
      </ul>
    </div>
  );
};

export default TodoList;
