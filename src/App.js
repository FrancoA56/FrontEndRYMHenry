import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import { GlobalStyle } from './utils/letras';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { USUARIO, EMAIL, CONTRASE } from './utils/usuarios';


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const showNavBar = location.pathname === '/';

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const login = (userData) => {
    if (userData.password === CONTRASE && userData.email === EMAIL && userData.usuario === USUARIO) {
      setAccess(true);
      navigate('/home');
    } else return window.alert('Cuenta incorrecta');
  };

  function onSearch(id) {
   const repeated = characters.find((char) => char.id === Number(id));
   if (repeated) return alert('Este personaje ya fue agregado!');
 
   axios
     .get(`http://localhost:3001/rickandmorty/character/${id}`)
     .then(({ data }) => {
       if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
       } else {
         window.alert('¡No hay personajes con este ID!');
       }
     })
     .catch((error) => {
       if (error.response && error.response.status >= 400) {
         window.alert('¡No hay personajes con este ID!');
       } else {
         console.error(error);
       }
     });
  };
 
  function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== Number(id)));
  };
 
  return (
      <div className='App'>
        <GlobalStyle />
        {!showNavBar && <Nav onSearch={onSearch}/>}
        <Routes>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </div>
   );
}