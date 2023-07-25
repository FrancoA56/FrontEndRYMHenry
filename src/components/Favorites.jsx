import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteCard from "./FavoritesCard";
import { filterCards, orderCards } from "../Redux/actions";
import styled from "styled-components";

const Tarjetas = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-left: 50px;
   margin-right: 50px;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 30px;
  margin-left: 35%;
  margin-right: 35%;
  padding-top: 15px;
  font-family: "Josefin Sans";
  color: rgb(116, 245, 57);
  background-color: rgb(61, 0, 71, 0.5);
  border-radius: 100px;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: rgb(40, 12, 53);
  }
`;

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: rgb(61, 0, 71, 0.5);
  color: rgb(116, 245, 57);
  outline: none;
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 15px;
  font-weight: 550;
  transition: background-color 0.5s ease-in-out;

&:hover {
  background-color: rgb(40, 12, 53);
}
`;

const StyledOption = styled.option`
`;



const Favorites = () => {
  const favorito = useSelector((state) => state.myFavorites);
  const favoritos = Object.values(favorito)
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    setAux(!aux);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    setAux(!aux);
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <Titulo>Mis Personajes Favoritos</Titulo>
      <StyledSelect onChange={handleOrder}>
        <StyledOption value="A">Ascendente</StyledOption>
        <StyledOption value="D">Descendente</StyledOption>
      </StyledSelect>
      <StyledSelect onChange={handleFilter}>
        <StyledOption value="Male">Male</StyledOption>
        <StyledOption value="Female">Female</StyledOption>
        <StyledOption value="Genderless">Genderless</StyledOption>
        <StyledOption value="unknown">unknown</StyledOption>
      </StyledSelect>
      <Tarjetas>
      {favoritos.map(({ id, name, species, gender, image, status, origin }) => {
        return (
          <FavoriteCard
            key={`favorite_${id}`}
            id={id}
            name={name}
            status={status}
            gender={gender}
            species={species}
            image={image}
            origin={origin}
          />
        );
      })}
      </Tarjetas>
    </div>
  );
};

export default Favorites;
