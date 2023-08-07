import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { keyframes } from "styled-components";

const appearAnimation = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const BotonFav = styled.button`
  background-color: rgba(12, 34, 63, 0);
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px;
  font-size: 35px;
`;

const Carta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: rgb(61, 0, 71, 0.5);
  margin-bottom: 15px;
  padding-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  animation: ${appearAnimation} 0.3s ease-in-out;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: rgb(40, 12, 53);
  }
`;

const NombrePersonaje = styled.h2`
  position: absolute;
  bottom: 23%;
  left: 0;
  padding: 10px;
  margin: 0;
  margin-bottom: 20px;
  background-color: rgba(99, 83, 83, 0.5);
  color: rgb(116, 245, 57);
  width: 70%;
  font-family: "Josefin Sans";
  font-size: 30px;
`;

const Imagen = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 0;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

const ContenedorImagen = styled.div`
  position: relative;
  overflow: hidden;
`;

const Stat = styled.div`
  color: rgb(116, 245, 57);
  padding: 10px;
  font-size: 150%;
`;

const FavoriteCard = (props) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteCharacters = Object.values(myFavorites);
    favoriteCharacters.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  return (
    <Carta>
      <ContenedorImagen>
        <Imagen src={props.image} alt="{props.name}" />
        {isFav ? (
          <BotonFav onClick={handleFavorites}>❤️</BotonFav>
        ) : (
          <BotonFav onClick={handleFavorites}>🖤</BotonFav>
        )}
      </ContenedorImagen>
      <NavLink to={`/detail/${props.id}`}>
        <NombrePersonaje>{props.name}</NombrePersonaje>
      </NavLink>
      <Stat>Status: {props.status}</Stat>
      <Stat>Gender: {props.gender}</Stat>
    </Carta>
  );
};

export default FavoriteCard;
