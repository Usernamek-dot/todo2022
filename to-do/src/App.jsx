import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); //all tasks
  const [task, setTask] = useState({}); //one task
  return (
    <>
      <Header />
      <div className="flex justify-around">
        {/* toDo={toDo} is the prop from FORM.JSX to update button */}
        <Form task={task} tasks={tasks} setTasks={setTasks} setTask={setTask} />
        <List tasks={tasks} setTask={setTask} />
      </div>
    </>
  );
}

export default App;

//props are always from parents to children. no the other way
