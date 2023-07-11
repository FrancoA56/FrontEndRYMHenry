import axios from "axios";
import { characters, setCharacters } from "../hooks";

function onSearch(id) {
    const repeated = characters.find((char) => char.id === Number(id));
    if (repeated) return alert('Este personaje ya fue agregado!');
  
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert('¡No hay personajes con este ID!');
        } else {
          console.error(error);
        }
      });
   };


export {onSearch};