import { Dispatch, SetStateAction } from "react";
import { Task } from "../types/Task";
import TaskEntry from "./TaskEntry";
import { v4 as uuidv4 } from "uuid";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};
const ShowCase = ({ tasks, setTasks }: Props) => {
  const removeTask = (index: number): void => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const editValue = (index: number, value: string): void => {
    if (value === "") return;
    const task: Task = {
      title: value,
      counter: 0,
    };
    setTasks((prev) => {
      const prevTasks = [...prev];
      prevTasks.splice(index, 1, task);
      return prevTasks;
    });
  };

  const incrementCounter = (index: number): void => {
    setTasks((prev) => {
      const prevTasks = [...prev];
      prevTasks[index] = {
        ...prevTasks[index], // Copy the task object
        counter: prevTasks[index].counter + 1, // Update the counter property
      };
      return prevTasks;
    });
  };

  return (
    <div
      className={`py-5 w-3/4 bg-base-100 shadow-xl rounded-lg grid grid-cols-1 gap-3 overflow-y-auto mx-auto h-60`}
    >
      {tasks.length > 0 &&
          tasks.map((task: Task, index: number) => (
            <div className="px-5 h-fit" key={uuidv4()}>
              <TaskEntry
                task={task}
                removeTask={removeTask}
                editValue={editValue}
                incrementCounter={incrementCounter}
                index={index}
                />
            </div>
            ))} 
      {tasks.length == 0 && (
        <span className="font-semibold">
          No tasks were added. Please add some!!
        </span>
      )}
    </div>
  );
};

export default ShowCase;
