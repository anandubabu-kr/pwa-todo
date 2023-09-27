import { useState } from "react";
import { todoItemType } from "../types";

type propType = { addNewItem: (item: todoItemType) => void };

const AddForm = ({ addNewItem }: propType) => {
  const [taskName, setTaskName] = useState("");

  const createTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    addNewItem({ text: taskName, isComplete: false });
    setTaskName("");
  };

  return (
    <form className="flex mx-auto max-w-xl rounded-lg overflow-hidden border border-slate-200 w-full justify-between">
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="p-2 outline-none w-full"
        type="text"
      />
      <button
        onClick={createTask}
        className="p-2 bg-orange-500 w-24 text-white font-black text-2xl"
      >
        +
      </button>
    </form>
  );
};

export default AddForm;
