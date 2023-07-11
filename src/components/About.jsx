import styled from "styled-components";
import foto from "../utils/imagenes/FotoDePerfil.jpg";

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

  &:hover {
    background-color: rgb(40, 12, 53);
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
  transition: background-color 0.5s ease-in-out;
  text-align: center;

  &:hover {
    background-color: rgb(40, 12, 53);
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
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const Contenedor = styled.div`
  display: flex;
  margin-top: 60px;
  text-align: justify;
`;

export default function About() {
  return (
    <div>
      <Titulo>Acerca de mi</Titulo>
      <Contenedor>
        <Imagen src={foto} alt="Imagen Franco Adamoli" />
        <Parrafo>
          Bienvenido!
          <Texto>
            Me llamo Franco Adamoli y este es mi primer proyecto
            <div>
              de inicial en Henry.
              <div></div>
              Gracias a ellos tengo la oportunidad de poder investigar y
              <div>
                aprender de este mundo tan fascinante que es la programacion
                web.
              </div>
              Espero les guste el diseño que prepare para esta pagina, con mucho
              esfuerzo y dedicacion, intente dejarla lo mas bonita posible.
              Acepto toda critica constructiva acerca de ella!
            </div>
          </Texto>
          <Texto>PD: Soy sensible, sean buenos.</Texto>
        </Parrafo>
      </Contenedor>
    </div>
  );
}
