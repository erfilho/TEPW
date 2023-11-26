import { useState } from "react";

const [string: transporte, setTransporte] = useState([]);

function addTransporte(propriedade) {
  setTransporte(["teste", 12]);
}

export default function Transporte() {
  return (
    <>
      <input type="text" placeholder="Potência" />
      <input type="text" placeholder="Ano" />
      <input type="text" placeholder="Marca" />
      <input type="text" placeholder="Cor" />

      <button onClick={addTransporte}>Adicionar</button>
    </>
  );
}
