import { useEffect, useRef, useState } from "react";
import { Task } from "../types/Task";
import { v4 as uuidv4 } from "uuid";
import generateTasks from "../utils/faker";
import TaskEntry from "./TaskEntry";

const VirtualizedList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<Task[]>([]);
  let itemHeight = 56;

  const calculateVisibleItems = () => {
    if (listRef.current && tasks.length > 0) {
      const { scrollTop, clientHeight } = listRef.current;
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.floor((scrollTop + clientHeight) / itemHeight);
      setVisibleTasks(() => tasks.slice(startIndex, endIndex + 1));
    }
  };

  useEffect(()=>{
    setTasks(()=>[...generateTasks(5000)])

  },[])
  useEffect(() => {
    const listElement = listRef.current;
    const time = setTimeout(() => {
      calculateVisibleItems();
      listElement!.addEventListener("scroll", calculateVisibleItems);
    }, 10);
    return () => {
      listElement!.removeEventListener("scroll", calculateVisibleItems);
      clearTimeout(time);
    };
  }, [tasks]);


  return (
    <div
      className={`py-5 relative w-3/4 bg-base-100 shadow-xl overflow-y-auto mx-auto h-60`}
      ref={listRef}
    >
      <div className={`relative`} style={{ height: itemHeight * tasks.length }}>
        {visibleTasks.map((task, index) => (
          <div
            className={`w-full h-[56px] px-10 absolute`}
            style={{
              top:
                (Math.floor(listRef.current?.scrollTop! / itemHeight) + index) *
                  itemHeight +
                "px",
            }}
            key={uuidv4()}
          >
            <TaskEntry
              task={task}
            />
          </div>
        ))}
      </div>
      {tasks.length == 0 && (
        <span className="font-semibold">
          No tasks were added. Please add some!!
        </span>
      )}
    </div>
  );
};

export default VirtualizedList;
