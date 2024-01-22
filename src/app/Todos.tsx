import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import TaskItem from "../components/TaskItem";
import { todoItemType } from "../types";
// import { addItemToFireStore } from "../firebase/services";

const key = "task";

const getStoredItems = () => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

function TodoApp() {
  const [todos, setTodos] = useState<todoItemType[]>(getStoredItems());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos]);

  const addNewItem = async (item: todoItemType) => {
    // await addItemToFireStore("user", item);
    setTodos([...todos, item]);
  };

  const deleteItem = (index: number) => {
    const newList = todos.filter((_item, i) => i !== index);

    setTodos(newList);
  };

  const completeTask = (index: number) => {
    const updatedItem: todoItemType = { ...todos[index], isComplete: true };
    const newArray = [...todos];

    newArray[index] = updatedItem;
    setTodos(newArray);
  };

  return (
    <div>
      <main className="flex flex-col px-3">
        {/* <hr className="my-2 w-1/2 mx-auto" /> */}
        <div className="h-[75vh] md:h-[75vh] overflow-y-auto mx-auto p-2 inner-shadow max-w-2xl w-full rounded-xl">
          {!todos.length && (
            <p className="text-center text-slate-500">No items yet!!</p>
          )}
          {todos.map((todoItem: todoItemType, index: number) => (
            <TaskItem
              key={index}
              index={index}
              completeTask={completeTask}
              deleteItem={deleteItem}
              todoItem={todoItem}
            />
          ))}
        </div>

        <AddForm addNewItem={addNewItem} />
        <a
          className="text-center text-orange-600"
          href="http://anandubabu.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          An.B apps
        </a>
      </main>
    </div>
  );
}

export default TodoApp;
