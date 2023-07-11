import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../Redux/actions";

const Favorites = () => {
  const favoritos = useSelector((state) => state.myFavorites);
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
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <h1>Mis Personajes Favoritos</h1>
      {favoritos.map(({ id, name, species, gender, image, status, origin }) => {
        return (
          <Card
            key={id}
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
    </div>
  );
};

export default Favorites;
