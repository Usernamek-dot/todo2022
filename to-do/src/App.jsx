import { Header } from "./components/Header";
import { Task } from "./components/Task";
import {List} from "./components/List"
function App() {
  return (
    <>
      <Header />
      <div className="items-center justify-between px-6">
        <Task />
        <List />
      </div>
    </>
  );
}

export default App;
