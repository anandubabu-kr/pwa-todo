import { useState } from "react";
import trash from "./assets/icons/trash.svg";
import check from "./assets/icons/check.svg";
import minus from "./assets/icons/minus.svg";

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
          {todoes.map((todoItem) => (
            <div className="flex mx-auto m-2 items-center rounded-xl overflow-hidden w-full max-w-xl bg-slate-100 justify-between">
              <p className="p-2 ">{todoItem.text}</p>
              <div>
                <button className="p-2 bg-red-600 rounded-full ml-2 hidden">
                  <img src={trash} width={14} height={14} alt="trash" />
                </button>
                <button className="p-2 bg-orange-600 rounded-full ml-2">
                  <img src={minus} width={14} height={14} alt="trash" />
                </button>
                <button className="p-2 bg-green-600 rounded-full ml-2">
                  <img src={check} width={14} height={14} alt="trash" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
