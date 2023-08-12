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
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: rgba(73, 39, 101, 0.6);
  }

  &:focus-within {
    background-color: rgba(59, 17, 94, 0.9);
  }
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
  &:hover {
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  }
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
  &:hover {
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  }
`;

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [usedIds, setUsedIds] = useState([]);

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!isNaN(searchValue)) {
        // Si el valor ingresado es un número, busca por ID
        onSearch(searchValue, "id");
      } else {
        // Si el valor ingresado no es un número, busca por nombre
        onSearch(searchValue, "name");
      }
    }
  };

  const handleRandomClick = () => {
    const maxId = 826;
    let randomId = Math.floor(Math.random() * maxId) + 1;
    while (usedIds.includes(randomId)) {
      randomId = Math.floor(Math.random() * maxId) + 1;
    }
    setSearchValue("");
    onSearch(randomId, "id");
    setUsedIds([...usedIds, randomId]);
  };

  return (
    <BarraDeBusqueda>
      <InputBusqueda
        type="search"
        value={searchValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyPress}
        placeholder="ID o Name"
      />
      <BotonAgregar onClick={() => handleKeyPress({ key: "Enter" })}>
        Agregar
      </BotonAgregar>
      <BotonRandom onClick={handleRandomClick}>?</BotonRandom>
    </BarraDeBusqueda>
  );
}

