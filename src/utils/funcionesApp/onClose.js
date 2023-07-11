import { setCharacters } from './utils/setCharacters';

function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== Number(id)));
  };

export {onClose};