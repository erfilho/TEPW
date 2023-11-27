import { useState } from "react";
import Carro from "../carro";

export default function Transporte() {
  const [potencia, setPotencia] = useState("");
  const [ano, setAno] = useState("");
  const [marca, setMarca] = useState("");
  const [cor, setCor] = useState("");

  const [carro, setCarro] = useState({});

  handleEnviar = (carData) => {
    setCarro({
      potencia,
      ano,
      marca,
      cor,
    });
  };

  return (
    <>
      <label>
        Potencia
        <input
          type="text"
          placeholder="Potência"
          onChange={(e) => setPotencia(e.target.value)}
        />
      </label>
      <br />
      <input
        type="text"
        placeholder="Ano"
        onChange={(e) => setAno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Marca"
        onChange={(e) => setMarca(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cor"
        onChange={(e) => setCor(e.target.value)}
      />

      <Carro props={carro} />
    </>
  );
}
