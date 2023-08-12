import styled from "styled-components";
import foto from "../utils/imagenes/FotoDePerfil.jpg";
import { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInAnimationRevez = keyframes`
  from {
    transform: translateX(200%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Titulo = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  font-weight: 400;
  margin-bottom: 30px;
  margin-left: 35%;
  margin-right: 35%;
  padding-top: 15px;
  font-family: "Josefin Sans";
  color: rgb(116, 245, 57);
  background-color: rgb(61, 0, 71, 0.5);
  border-radius: 100px;
  transition: background-color 0.5s ease-in-out;
  animation: ${slideInAnimationRevez} 0.7s ease-in-out;

  &:hover {
    background-color: rgb(40, 12, 53, 0.9);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
  }
`;

const Parrafo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-weight: 400;
  margin: 0;
  font-family: "Josefin Sans";
  margin-right: 200px;
  margin-left: 120px;
  color: rgb(116, 245, 57);
  background-color: rgba(61, 0, 71, 0.5);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 70px;
  padding-right: 70px;
  border-radius: 100px;
  transition: background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  text-align: center;

  &:hover {
    background-color: rgb(40, 12, 53, 0.9);
    box-shadow: 20px 20px 0px rgba(0, 255, 0, 0.7);
  }
`;

const Texto = styled.div`
  margin-top: 10px;
`;

const Imagen = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 500px;
  margin-left: 250px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.4);
    box-shadow: 0 0 80px rgba(150, 47, 210, 0.8);
  }
`;

const Contenedor = styled.div`
  display: flex;
  margin-top: 60px;
  text-align: justify;
  animation: ${slideInAnimation} 0.7s ease-in-out;
`;

export default function About() {
  return (
    <div>
      <Titulo>Acerca de mi</Titulo>
      <Contenedor>
        <Imagen src={foto} alt="Imagen Franco Adamoli" />
        <Parrafo>
          ¡Bienvenidos!
          <Texto>
            Soy Franco Adamoli y me encuentro como estudiante de programación
            web en Henry. Esta página representa mi primer proyecto en este
            fascinante mundo. Aquí tengo la maravillosa oportunidad de
            investigar y aprender, y me siento agradecido por la plataforma que
            Henry me ofrece para desarrollarme. En especial, quiero compartir
            con ustedes mi pasión por la programación web. Quise diseñar esta
            página con esfuerzo y dedicación, buscando reflejar mi esencia de la
            mejor manera posible. Me siento muy orgulloso de poder mostrarles el
            resultado. Acepto con gusto cualquier crítica constructiva que
            tengan acerca de mi trabajo, ya que estoy siempre dispuesto a
            aprender y mejorar. ¡Espero que disfruten explorando mi página tanto
            como yo disfruté creándola!
            <Texto>Gracias por estar aquí.</Texto>
          </Texto>
        </Parrafo>
      </Contenedor>
    </div>
  );
}
