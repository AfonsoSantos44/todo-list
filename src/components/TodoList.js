// components/TodoList.js
import TodoItem from "./TodoItem";

const TodoList = ({ list = [], deleteItem, editItem }) => {
  return (
    <div>
      {list.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          index={index}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
