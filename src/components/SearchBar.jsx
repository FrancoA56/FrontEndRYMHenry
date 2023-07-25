import React from "react";
import styled from "styled-components";
import { useState } from "react";

const BarraDeBusqueda = styled.div`
  background-color: rgb(235, 225, 225, 0.1);
  padding: 20px;
  position: absolute;
  top: 70px;
  right: 100px;
`;

const InputBusqueda = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  padding: 5px;
  color: white;
  outline: none;
  margin-right: 10px;
  width: 30%;
  text-align: center;
`;

const BotonAgregar = styled.button`
  background-color: rgba(4, 4, 65, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
`;

const BotonRandom = styled.button`
  background-color: rgba(4, 4, 65, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  margin-left: 10px;
`;

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const [usedIds, setUsedIds] = useState([]);

  const handleOnChange = (e) => {
    setId(e.target.value);
  };

  const handleRandomClick = () => {
    const maxId = 826;
    let randomId = Math.floor(Math.random() * maxId) + 1;
    // Genera un nuevo número aleatorio si el generado ya está en la lista de usados.
    while (usedIds.includes(randomId)) {
      randomId = Math.floor(Math.random() * maxId) + 1;
    }
    setId(randomId.toString());
    onSearch(randomId);
    setUsedIds([...usedIds, randomId]);
  };

  return (
    <BarraDeBusqueda>
      <InputBusqueda type="search" onChange={handleOnChange} />
      <BotonAgregar onClick={() => onSearch(id)}>Agregar</BotonAgregar>
      <BotonRandom onClick={handleRandomClick}>Random</BotonRandom>
    </BarraDeBusqueda>
  );
}
