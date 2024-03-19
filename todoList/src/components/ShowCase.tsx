import { Dispatch, SetStateAction } from "react";
import { Task } from "../types/Task";
import TaskEntry from "./TaskEntry";


type Props = {
  tasks: Task[],
  setTasks: Dispatch<SetStateAction<Task[]>>
}
const ShowCase = ({tasks, setTasks}:Props) => {
  const removeTask = (index: number) => {
    const taskPlaceholders = [...tasks]
    taskPlaceholders.splice(index,1)
    setTasks(()=>taskPlaceholders)
  }; 
  return (
    <>
      <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          {tasks.length > 0 &&
            tasks.map((task: Task, index: number) => (
              <TaskEntry
                text={task.title}
                removeTask={removeTask}
                index={index}
                key={index}
              />
            ))}
          {tasks.length == 0 && <p>No tasks were added. Please add some!!</p>}
        </div>
      </div>
    </>
  );
};

export default ShowCase;
