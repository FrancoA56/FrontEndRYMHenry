import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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

const BotonClose = styled.button`
  background-color: rgba(12, 34, 63, 0.84);
  color: rgb(0, 0, 0);
  font-family: "Get Schwifty";
  font-weight: bold;
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  padding-left: 10px;
  font-size: 30px;
  cursor: pointer;
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
  cursor: pointer;
`;

const Carta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: rgb(61, 0, 71, 0.5);
  margin-top: 40px;
  padding-bottom: 75px;
  margin-left: 15px;
  margin-right: 15px;
  animation: ${appearAnimation} 0.3s ease-in-out;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: rgb(40, 12, 53);
    box-shadow: 0 0 80px rgba(0, 255, 0, 0.7);
  }
`;

const NombrePersonaje = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  margin: 0;
  margin-bottom: 0px;
  background-color: rgba(99, 83, 83, 0.5);
  color: rgb(116, 245, 57);
  width: 93.5%;
  height: 15%;
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

const Card = (props) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const location = useLocation();
  const enFavoritos = location.pathname === "/favorites";

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
        {enFavoritos ? (
          <></>
        ) : (
          <BotonClose onClick={() => props.onClose(props.id)}>X</BotonClose>
        )}
      </ContenedorImagen>
      <NavLink to={`/detail/${props.id}`}>
        <NombrePersonaje>{props.name}</NombrePersonaje>
      </NavLink>
    </Carta>
  );
};

export default Card;
