import { ChangeEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import useTasks from "../hooks/useTasks";

type Props = {
  text: string;
  index:number
};
const TaskEntry = ({text, index}:Props) => {
  const [checked, setChecked] = useState<boolean>(() => false);
  const { removeTask } = useTasks();
  return (
    <div className="border border-primary rounded-lg font-bold flex justify-between ">
      <label className="cursor-pointer label overflow-x-auto">
        <input
          type="checkbox"
          className="checkbox checkbox-primary mx-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setChecked(() => e.target.checked);
          }}
        />
        <span
          className={`label-text text-base  ${checked ? "line-through" : ""}`}
        >
          {text}
        </span>
      </label>
      <div className="flex justify-center items-center">
        <button className="btn btn-warning rounded-none text-error-content w-fit !min-h-0 h-10 border-r border-0 border-neutral-100">
          <MdEdit />
        </button>
        <button
          className="btn btn-error rounded-lg rounded-l-none text-error-content w-fit !min-h-0 h-10 border-l border-0 border-neutral-100"
          onClick={() => removeTask(index)}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
 
export default TaskEntry;