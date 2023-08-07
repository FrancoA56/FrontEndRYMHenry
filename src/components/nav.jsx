import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const BotonHome = styled(NavLink)`
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
  color: rgb(0, 255, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  top: 10px;
  left: 20px;
`;

const BotonAbout = styled(NavLink)`
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
  color: rgb(0, 255, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  top: 45px;
  left: -94px;
  position: relative;
`;

const BotonFavorite = styled(NavLink)`
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
  color: rgb(0, 255, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  top: 90px;
  position: relative;
  left: -189px;
`;

const BotonSalir = styled(NavLink)`
  color: rgb(0, 255, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  position: relative;
  top: 135px;
  left: -311px;
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
`;

const Titulo = styled.h1`
  font-family: "Get Schwifty";
  color: rgb(0, 255, 0);
  font-size: 500%;
  text-align: center;
  position: relative;
  top: -20px;
  @media (max-width: 1100px) {
    visibility: hidden;
  }
`;

const ContenedorNav = styled.div`
  display: flex;
  justify-content: center;
`;

const ContenedorBotones = styled.div`
  position: absolute;
  flex-direction: row;
  left: 20px;
  top: 30px;
`;

const Bienvenido = styled.div`
  font-family: "Josefin Sans";
  color: rgb(0, 255, 0);
  font-size: 300%;
  text-align: center;
  position: absolute;
  padding-top: 10px;
  border-radius: 10px;
  top: 20px;
  right: 70%;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 20px;
  background: linear-gradient(45deg, #000000, #4b0a84, #000000);
  @media (max-width: 1100px) {
    visibility: hidden;
  }
`;

const Usuario = styled.div`
  padding: 10px;
  font-family: "Get Schwifty";

`;

export default function Nav({ onSearch }) {
  const location = useLocation();

  const showSearchBar = location.pathname === "/home";

  return (
    <>
      <ContenedorNav>
        <ContenedorBotones>
          <BotonHome as={NavLink} to="/home">
            Home
          </BotonHome>
          <BotonAbout as={NavLink} to="/about">
            About
          </BotonAbout>
          <BotonFavorite as={NavLink} to="/favorites">
            Favorites
          </BotonFavorite>
          <BotonSalir as={NavLink} to="/">
            Cerrar Sesion
          </BotonSalir>
        </ContenedorBotones>
        <Bienvenido>
          Hola
          <Usuario>Franco</Usuario>
        </Bienvenido>
        <Titulo>rick and morty</Titulo>
        {showSearchBar && <SearchBar onSearch={onSearch} />}
      </ContenedorNav>
    </>
  );
}
