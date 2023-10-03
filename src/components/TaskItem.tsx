import trash from "../assets/icons/trash.svg";
import check from "../assets/icons/check.svg";
import minus from "../assets/icons/minus.svg";
import { todoItemType } from "../types";

type propType = {
  todoItem: todoItemType;
  deleteItem: (index: number) => void;
  completeTask: (index: number) => void;
  index: number;
};

const TaskItem = ({ todoItem, deleteItem, index, completeTask }: propType) => {
  return (
    <div
      className={`flex mx-auto my-3 items-center rounded-xl overflow-hidden w-full max-w-xl drop-shadow justify-between ${
        todoItem.isComplete
          ? "bg-green-300  border-l-2 border-green-700"
          : "bg-slate-100"
      }`}
    >
      <p className="py-3 mr-2 mx-4 max-w-[65%] truncate">{todoItem.text}</p>
      {todoItem.isComplete ? (
        <p className="mx-4">
          <img src={check} width={16} height={16} alt="trash" />
        </p>
      ) : (
        <div className={`${todoItem.isComplete ? "hidden" : ""}`}>
          <button className="p-2 bg-red-600 rounded-full ml-2 hidden drop-shadow">
            <img src={trash} width={14} height={14} alt="trash" />
          </button>
          <button
            onClick={() => deleteItem(index)}
            className="p-2 bg-orange-600 rounded-full ml-2 drop-shadow"
          >
            <img src={minus} width={14} height={14} alt="trash" />
          </button>
          <button
            onClick={() => completeTask(index)}
            className="p-2 bg-green-600 rounded-full mx-2 drop-shadow"
          >
            <img src={check} width={14} height={14} alt="trash" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
