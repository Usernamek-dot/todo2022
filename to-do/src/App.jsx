import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
function App() {
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
