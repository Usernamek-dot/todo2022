import { Button } from "./Button";

export const Task = ({ task, setTask }) => {
  const { title, message, date } = task; //desctructure the object to only get the props

  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-5 block rounded-lg shadow-lg dark:bg-gray-800  max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300 text-gray-500">
            To Do
          </div>
          <div className="p-6">
            <h5 className="dark:text-slate-400 text-xl font-medium mb-2">
              {title}
            </h5>
            <p className="dark:text-slate-400 text-base mb-4">{message}</p>
            <Button>Delete</Button>
            <Button onClick={() => setTask(task)}>Update</Button>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-500">
            {date}
            {/* 2 days ago */}
          </div>
        </div>
      </div>
    </>
  );
};
// aTask prop was brougth from its parent LIST.JSX
