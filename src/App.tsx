import Board from "./components/Board/Board";
import { TEXT } from "./constants/text";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>{TEXT.APP_TITLE}</h1>
      <Board />
    </div>
  );
}

export default App;
