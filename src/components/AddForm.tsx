import { useState } from "react";

const AddForm = () => {
  const [taskName, setTaskName] = useState("");

  return (
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
  );
};

export default AddForm;
