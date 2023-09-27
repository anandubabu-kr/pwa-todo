import trash from "../assets/icons/trash.svg";
import check from "../assets/icons/check.svg";
import minus from "../assets/icons/minus.svg";
import { todoItemType } from "../types";

type propType = {
  todoItem: todoItemType;
  deleteItem: (index: number) => void;
  index: number;
};

const TaskItem = ({ todoItem, deleteItem, index }: propType) => {
  return (
    <div className="flex mx-auto m-2 items-center rounded-xl overflow-hidden w-full max-w-xl bg-slate-100 justify-between">
      <p className="p-2 ">{todoItem.text}</p>
      <div>
        <button className="p-2 bg-red-600 rounded-full ml-2 hidden">
          <img src={trash} width={14} height={14} alt="trash" />
        </button>
        <button
          onClick={() => deleteItem(index)}
          className="p-2 bg-orange-600 rounded-full ml-2"
        >
          <img src={minus} width={14} height={14} alt="trash" />
        </button>
        <button className="p-2 bg-green-600 rounded-full ml-2">
          <img src={check} width={14} height={14} alt="trash" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
