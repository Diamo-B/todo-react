import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaPlus } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { Task } from "../types/Task";

type Props = {
  setTasks: Dispatch<SetStateAction<Task[]>>
};
const Form = ({ setTasks }:Props) => {
  const schema = z.object({
    task: z.string().min(1),
  });

  const { handleSubmit, register, resetField, formState:{errors} } = useForm<
    z.infer<typeof schema>
  >({
    resolver: zodResolver(schema),
  });

  const submit = async (data: z.infer<typeof schema>) => {
    const newTask:Task = {
      title: data.task,
      counter:0
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    resetField("task");
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className={`label-text ${errors.task?"text-error":""}`}>{
              errors.task?
              "Please enter a task name!"
              :
              "Add new task"
            }</span>
          </div>
          <div className="flex">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs rounded-r-none focus:outline-none"
              {...register("task")}
            />
            <button className="btn btn-primary w-fit rounded-l-none">
              <FaPlus />
            </button>
          </div>
        </label>
      </form>
    </>
  );
};

export default Form;
