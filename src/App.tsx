import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import TaskItem from "./components/TaskItem";
import { todoItemType } from "./types";

function App() {
  const [todoes, setTodoes] = useState<todoItemType[]>([]);

  useEffect(() => {}, [todoes]);

  const addNewItem = (item: todoItemType) => {
    setTodoes([...todoes, item]);
  };

  const deleteItem = (index: number) => {
    const newList = todoes.filter((_item, i) => i !== index);

    setTodoes(newList);
  };

  const completeTask = (index: number) => {
    const updatedItem: todoItemType = { ...todoes[index], isComplete: true };
    const newArray = [...todoes];

    newArray[index] = updatedItem;
    setTodoes(newArray);
  };

  return (
    <div>
      <h1 className="text-xl font-bold flex justify-center my-4 text-orange-500">
        <img src="/logo.svg" />
        <span className="mx-4">My Tasks</span>
      </h1>
      <main className="flex flex-col">
        <hr className="my-5 w-1/2 mx-auto" />

        <div className="h-[75vh] overflow-y-auto px-6">
          {!todoes.length && (
            <p className="  text-center text-slate-500">No items yet!!</p>
          )}
          {todoes.map((todoItem: todoItemType, index: number) => (
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
          href="http://anandubabu.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          An.B apps
        </a>
      </main>
    </div>
  );
}

export default App;
