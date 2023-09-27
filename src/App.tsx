import { useState } from "react";
import TaskItem from "./components/TaskItem";
import { todoItemType } from "./types";

function App() {
  const [taskName, setTaskName] = useState("");

  const todoes = [
    { text: "Todo text", isComplete: false },
    { text: "Todo text 2", isComplete: false },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl text-center my-4">My Todos</h1>
      <main className="flex flex-col">
        <form className="flex mx-auto max-w-xl rounded-lg overflow-hidden border border-slate-200 w-full justify-between">
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 outline-none w-full"
            type="text"
          />
          <button className="p-2 bg-orange-500 w-24 text-white font-black text-2xl">
            +
          </button>
        </form>

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
