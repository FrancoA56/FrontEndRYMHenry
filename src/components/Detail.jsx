import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Tarjeta = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 20%;
  background-color: rgba(61, 0, 71, 0.5);
  padding-bottom: 30px;
  margin-right: 25%;
  margin-left: 23%;
  border-radius: 100px;
`;

const ContenedorTarjeta = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Nombre = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: rgb(251, 255, 0);
  background-color: rgba(61, 0, 71, 0.5);
  margin-left: 40%;
  margin-right: 40%;
  padding-top: 17px;
  padding-bottom: 13px;
  border-radius: 100px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  font-size: 2rem;
  font-weight: 400;
  color: rgb(251, 255, 0);
`;

const Stat = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ContenedorImagen = styled.div`
  flex-shrink: 0;
`;

const Imagen = styled.img`
  width: 400px;
  margin-top: 30px;
  margin-left: 30%;
  object-fit: cover;
  border-radius: 40px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transform-origin: center center;
  }
`;

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data && data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return () => setCharacter({});
  }, [id]);

  return (
    <ContenedorTarjeta>
      {character.name && (
        <>
          <Nombre>{character.name}</Nombre>
          <Tarjeta>
            <ContenedorImagen>
              <Imagen src={character.image} alt={character.name} />
            </ContenedorImagen>
            <Stats>
              <Stat>Status: {character.status}</Stat>
              <Stat>Specie: {character.species}</Stat>
              <Stat>Gender: {character.gender}</Stat>
              <Stat>Origin: {character.origin}</Stat>
              <Stat>Location: {character.location}</Stat>
            </Stats>
          </Tarjeta>
        </>
      )}
    </ContenedorTarjeta>
  );
}
