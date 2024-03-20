import { ChangeEvent, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdEdit, MdDone } from "react-icons/md";
import { Task } from "../types/Task";

type Props = {
  task: Task;
  index?: number;
  removeTask?: (index: number) => void;
  editValue?: (index: number, value: string, counter:number) => void;
  incrementCounter?: (index:number) => void;
};

const TaskEntry = ({ task, index, removeTask, editValue, incrementCounter }: Props) => {
  const [checked, setChecked] = useState<boolean>(() => false);
  const [edit, setEdit] = useState<boolean>(() => false);
  const inputRef = useRef<HTMLInputElement>(null);

  const editOnClick = () => {
    if (edit && editValue && index) editValue(index, inputRef?.current?.value || "", task.counter);
    setEdit((prev) => !prev);
  }

  return (
    
      <div className="border-2 border-neutral-100 rounded-lg w-full h-16 flex items-center indicator">
        {
          incrementCounter?
          <>
            <span className="indicator-item indicator-top indicator-start badge badge-primary">{task.counter}</span>
                    <input
            type="checkbox"
            className="checkbox checkbox-primary mx-2 flex-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setChecked(() => e.target.checked);
            }}
                    />
          </>
        :
        ""
        }
        <div
          className={`text-base text-left border-x-2 w-full h-full px-5 overflow-x-auto flex-auto flex flex-col justify-center  ${
            checked ? "line-through" : ""
          }`}
        >
          {edit ? (
            <input
              type="text"
              placeholder="Type here"
              defaultValue={task.title}
              className="input input-bordered input-primary w-full !min-h-0 h-6 focus:outline-none"
              autoFocus
              ref={inputRef}
            />
          ) : (
            <span onClick={()=>{incrementCounter && incrementCounter(index!)}}>{task.title}</span>
          )}
        </div>
        {
          removeTask ?
            <div className="flex justify-center items-center h-full flex-none">
              <button
                className={`btn ${
                  !edit ? "btn-warning" : "btn-success"
                } rounded-none text-error-content w-fit !min-h-0 h-full border-r border-0 border-neutral-100`}
                onClick={editOnClick}
              >
                {!edit ? <MdEdit /> : <MdDone className="size-4" />}
              </button>
              <button
                className="btn btn-error rounded-lg rounded-l-none text-error-content w-fit !min-h-0 h-full  border-l border-0 border-neutral-100"
                onClick={() => removeTask(index!)}
              >
                <IoClose />
              </button>
            </div>
          :
            ""
        }
      </div>
  );
};

export default TaskEntry;
