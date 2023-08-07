import React from "react";
import styled from "styled-components";
import { useState } from "react";

const BarraDeBusqueda = styled.div`
  background-color: rgb(235, 225, 225, 0.2);
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  top: 5%;
  right: 3%;
  border-radius: 10px;
`;

const InputBusqueda = styled.input`
  border: none;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border-bottom: 2.5px solid rgb(0, 255, 0);
  padding: 5px;
  color: rgb(0, 255, 0);
  outline: none;
  margin-right: 10px;
  width: 30%;
  text-align: center;
`;

const BotonAgregar = styled.button`
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
  color: rgb(0, 255, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
`;

const BotonRandom = styled.button`
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
  color: rgb(0, 255, 0);
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
      <BotonRandom onClick={handleRandomClick}>?</BotonRandom>
    </BarraDeBusqueda>
  );
}
