import { Button } from "./Button";

export const Task = ({ aTask }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-5 block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300">To Do</div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {aTask.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{aTask.message}</p>
            <Button>Delete</Button>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
            {aTask.date}
            {/* 2 days ago */}
          </div>
        </div>
      </div>
    </>
  );
};
// aTask prop was brougth from its parent LIST.JSX
