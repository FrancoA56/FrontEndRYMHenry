import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

const appearAnimation = keyframes`
  from {
    transform: scale(1.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const BotonHome = styled(NavLink)`
  background-color: rgba(4, 4, 65, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  margin-top: 0px;
  margin-right: 70px;
  margin-left: 70px;
  display: inline-block;
  text-decoration: none;
`;

const BotonAbout = styled(NavLink)`
  background-color: rgba(4, 4, 65, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  margin-right: 70px;
`;

const BotonFavorite = styled(NavLink)`
  background-color: rgba(4, 4, 65, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Josefin Sans";
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
`;

const Titulo = styled.h1`
  font-family: "Get Schwifty";
  color: rgb(0, 255, 0);
  font-size: 450%;
  text-align: center;
  &:hover {
    animation: ${appearAnimation} 2s ease-in-out;
  }
`;

const ContenedorNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContenedorBotones = styled.div`
  position: absolute;
  left: 20px;
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
        </ContenedorBotones>
        <Titulo>rick and morty</Titulo>
        {showSearchBar && <SearchBar onSearch={onSearch} />}
      </ContenedorNav>
    </>
  );
}
