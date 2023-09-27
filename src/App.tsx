import { useState } from "react";
import AddForm from "./components/AddForm";
import TaskItem from "./components/TaskItem";
import { todoItemType } from "./types";

function App() {
  const [todoes, setTodoes] = useState<todoItemType[]>([]);
  // const  = [
  //   { text: "Todo text", isComplete: false },
  //   { text: "Todo text 2", isComplete: false },
  // ];
  const addNewItem = (item: todoItemType) => {
    setTodoes([...todoes, item]);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl text-center my-4">My Tasks</h1>
      <main className="flex flex-col">
        <AddForm addNewItem={addNewItem} />

        <hr className="my-5 w-1/2 mx-auto" />

        <div>
          {todoes.map((todoItem: todoItemType) => (
            <TaskItem todoItem={todoItem} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
