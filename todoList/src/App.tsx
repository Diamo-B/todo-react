import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Task } from "./types/Task";
import ShowCase from "./components/ShowCase";
import VirtualizedList from "./components/virtualizedList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [virtualized, showVirtualized] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="card w-1/2 bg-neutral text-neutral-content max-h-full">
        <div className="card-body items-center text-center max-h-full">
          <h2 className="card-title text-syne text-3xl">Todo List</h2>
          <Form setTasks={setTasks} />
          <div className="flex w-full justify-center gap-10">
            <button className="btn btn-accent btn-outline h-10 min-h-0" onClick={()=> showVirtualized(false)}>
              Normal todo list
            </button>
            <button className="btn btn-accent btn-outline h-10 min-h-0" onClick={()=> showVirtualized(true)}>
              Virtualized List
            </button>
          </div>
          {!virtualized ? (
            <ShowCase tasks={tasks} setTasks={setTasks} />
          ) : (
            <VirtualizedList />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
