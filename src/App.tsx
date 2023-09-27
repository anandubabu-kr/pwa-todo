import { useState } from "react";
import AddForm from "./components/AddForm";
import TaskItem from "./components/TaskItem";
import { todoItemType } from "./types";

function App() {
  const [todoes, setTodoes] = useState<todoItemType[]>([]);

  const addNewItem = (item: todoItemType) => {
    setTodoes([...todoes, item]);
  };

  const deleteItem = (index: number) => {
    const newList = todoes.filter((_item, i) => i !== index);

    setTodoes(newList);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl text-center my-4">My Tasks</h1>
      <main className="flex flex-col">
        <AddForm addNewItem={addNewItem} />

        <hr className="my-5 w-1/2 mx-auto" />

        {!todoes.length && (
          <p className="  text-center text-slate-500">No items yet!!</p>
        )}
        <div>
          {todoes.map((todoItem: todoItemType, i: number) => (
            <TaskItem
              key={i}
              index={i}
              deleteItem={deleteItem}
              todoItem={todoItem}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
