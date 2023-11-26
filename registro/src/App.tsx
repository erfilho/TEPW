import { useState } from "react";
import "./App.css";
import Transporte from "./components/transporte";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Transporte />
    </>
  );
}

export default App;
