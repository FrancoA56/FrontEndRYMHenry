import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
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

const Tarjeta = styled.div`
  display: flex;
  margin-top: 40px;
  background-color: rgba(61, 0, 71, 0.5);
  padding-bottom: 50px;
  padding-top: 30px;
  margin-right: 25%;
  margin-left: 23%;
  border-radius: 100px;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: rgb(40, 12, 53);
  }
`;

const TarjetaEpisodios = styled.div`
  display: flex;
  margin-top: 40px;
  background-color: rgba(61, 0, 71, 0.5);
  padding-bottom: 50px;
  /* padding-top: 30px; */
  margin-left: 23%;
  margin-right: 25%;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: rgb(40, 12, 53);
  }
`;

const ContenedorTarjeta = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${appearAnimation} 0.3s ease-in-out;
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
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: rgb(40, 12, 53);
  }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  font-size: 2rem;
  font-weight: 400;
  color: rgb(251, 255, 0);
`;

const EpisodioStats = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 400;
  color: rgb(251, 255, 0);
  text-align: center;
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

const MAX_EPISODES_DISPLAY = 25;
  const truncateEpisodes = (episodes) => {
    if(episodes.length > MAX_EPISODES_DISPLAY){
      const truncatedEpisodes = episodes.slice(0, MAX_EPISODES_DISPLAY);
      return [...truncatedEpisodes, "..."];
    }
    return episodes;
  }

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

  const episodios = (data) => {
    const { episode } = data;
    if (!Array.isArray(episode)) {
      console.error('La propiedad "episode" no es un array.');
      return [];
    }
    const soloNumeros = [];
    for (const url of episode) {
      const match = url.match(/\/(\d+)$/);
      if (match) {
        const episodeNumber = parseInt(match[1], 10);
        soloNumeros.push(episodeNumber);
      }
    }
    console.log(data);
    console.log(soloNumeros);
    return soloNumeros;
  };

  const epi = episodios(character);
  const truncatedEpisodes = truncateEpisodes(epi);
  const EPI = truncatedEpisodes.join(",");
  

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
          <TarjetaEpisodios>
            <EpisodioStats>
              <Stat>Episodios: {EPI}</Stat>
            </EpisodioStats>
          </TarjetaEpisodios>
        </>
      )}
    </ContenedorTarjeta>
  );
}
