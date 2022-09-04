import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const deleteTask = (id) => {
    const chooseTask = tasks.filter((task) => task.id !== id);
    setTasks(chooseTask);
  };
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Form task={task} tasks={tasks} setTasks={setTasks} setTask={setTask} />
        <List deleteTask={deleteTask} tasks={tasks} setTask={setTask} />
      </div>
    </>
  );
}

export default App;

//props are always from parents to children. no the other way
