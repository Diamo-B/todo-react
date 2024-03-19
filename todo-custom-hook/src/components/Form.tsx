import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaPlus } from "react-icons/fa";
import useTasks from "../hooks/useTasks";
import ShowCase from "./ShowCase";

const Form = () => {
  const { addNewTask, tasks } = useTasks();

  const schema = z.object({
    task: z.string(),
  });

  const { handleSubmit, register, resetField } = useForm<
    z.infer<typeof schema>
  >({
    resolver: zodResolver(schema),
  });

  const submit = async (data: z.infer<typeof schema>) => {
    addNewTask(data.task);
    resetField("task");
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Add new task</span>
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
      <ShowCase tasks={tasks}/>
    </>
  );
};

export default Form;
