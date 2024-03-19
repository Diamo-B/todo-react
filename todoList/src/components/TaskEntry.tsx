import { ChangeEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdEdit,MdDone } from "react-icons/md";

type Props = {
  text: string;
  index: number;
  removeTask: (v:number)=>void;
};
const TaskEntry = ({text, index, removeTask}:Props) => {
  const [checked, setChecked] = useState<boolean>(() => false);
  const [edit, setEdit] = useState<boolean>(false)
  return (
    <div className="border border-primary rounded-lg font-bold flex max-w-full overflow-x-auto">
      <div className="cursor-pointer label relative">
        <input
          type="checkbox"
          className="checkbox checkbox-primary mx-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setChecked(() => e.target.checked);
          }}
        />
        <div
          className={`label-text text-base w-full ${
            checked ? "line-through" : ""
          }`}
        >
          {edit ? (
            <input
              type="text"
              placeholder="Type here"
              defaultValue={text}
              className="input input-bordered input-primary w-full !min-h-0 h-6 focus:outline-none"
              autoFocus
            />
          ) : (
            <p>{text}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center ml-auto">
        <button
          className={`btn ${!edit?"btn-warning":"btn-success"} rounded-none text-error-content w-fit !min-h-0 h-full border-r border-0 border-neutral-100`}
          onClick={() => setEdit((prev) => !prev)}
        >
          {!edit ? <MdEdit /> : <MdDone className="size-4"/>}
        </button>
        <button
          className="btn btn-error rounded-lg rounded-l-none text-error-content w-fit !min-h-0 h-full  border-l border-0 border-neutral-100"
          onClick={() => removeTask(index)}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
 
export default TaskEntry;