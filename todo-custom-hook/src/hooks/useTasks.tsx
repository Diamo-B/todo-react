import { useState } from "react";
import { Task } from "../types/Task";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addNewTask = async (title:string) => {
    
    const newTask:Task = {
      title:title,
      counter: 0
    } 
    await setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const removeTask = async (index:number) =>{
    console.log(tasks);
    
    await setTasks((prev)=>[...prev.splice(index,1)])
    console.log(tasks);
    
  }

  return {setTasks, addNewTask, tasks, removeTask}
};

export default useTasks;
