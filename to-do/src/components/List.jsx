import { Task } from "./Task";

export const List = ({ tasks }) => {
  return (
    <>
      <div className=" overflow-scroll h-screen  py-10 px-5 w-full">
        <h5 className="text-orange-200 text-xl leading-tight font-medium mb-2">
          Task List
        </h5>
        {/* iterating data */}
        {tasks.map((task) => {
          return <Task key={task.id} aTask={task} />;
        })}
      </div>
    </>
  );
};
//BAD practice:  to have key={index} since we need to genereta our own ids for each component that we iterate through map.
