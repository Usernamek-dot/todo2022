import { NoList } from "./NoList";
import { Task } from "./Task";

export const List = ({ deleteTask, tasks, setTask }) => {
  return (
    <>
      <div className=" overflow-y-auto h-screen  py-10 px-5 w-full">
        {tasks && tasks.length ? (
          <>
            {/* title */}
            <h5 className="text-orange-200 text-xl leading-tight font-medium mb-2">
              Task List
            </h5>
            {/* iterating tasks */}
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  deleteTask={deleteTask}
                  task={task}
                  setTask={setTask}
                />
              );
            })}
          </>
        ) : (
          <NoList />
        )}
      </div>
    </>
  );
};
//BAD practice:  to have key={index} since we need to genereta our own ids for each component that we iterate through map.
