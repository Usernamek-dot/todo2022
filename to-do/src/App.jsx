import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { useState } from "react";

function App(props) {
  const [task, setTask] = useState([]);
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Form task={task} setTask={setTask} />
        <List tasks={task} />
      </div>
    </>
  );
}

export default App;

//props are always from parents to children. no the other way
