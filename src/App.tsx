import React from "react";

function App() {
  const todoes = [
    { text: "Todo text", isComplete: false },
    { text: "Todo text 2", isComplete: false },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl text-center my-4">My Todos</h1>
      <main className="flex flex-col">
        <form className="flex mx-auto max-w-xl rounded-lg overflow-hidden border border-slate-200 w-full justify-between">
          <input className="p-2 outline-none w-full" type="text" />
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
                <button className="p-2 bg-red-500 rounded-full ml-2">co</button>
                <button className="p-2 bg-green-500 rounded-full ml-2">
                  do
                </button>
                <button className="p-2 bg-orange-500 rounded-full ml-2">
                  rm
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
