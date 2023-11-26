import { useState } from "react";

const [carro, setCarro] = useState([]);

function addCarro(propriedade) {
  setCarro([...carro, propriedade]);
}

export default function Carro({ props }) {
  return <>{props}</>;
}
