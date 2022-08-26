import {Form} from "./components/Form"
import {Header} from "./components/Header"
import {Task} from "./components/Task"

function App() {
  return (
    <>
      <h1 className="text-4xl uppercase">hello world</h1>
      <Header/>
      <Form/>
      <Task/>
    </>
  );
}

export default App;
