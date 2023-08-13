import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/nav.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import FormRegister from "./components/FormRegister";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./utils/letras";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const showNavBar = location.pathname === "/";
  const ShowNavBarII = location.pathname === "/register";

  useEffect(() => {
    if (!access && location.pathname !== "/register") {
      navigate("/");
    }
  }, [access, navigate, location.pathname]);

  const URL = "http://localhost:3001/rickandmorty/";

  const login = async (userData) => {
    try {
      const data = await axios(
        `${URL}login?user=${userData.user}&email=${userData.email}&password=${userData.password}`
      );
      const { access } = data.data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const register = async (userData) => {
    try {
      await axios.post(`${URL}register`, userData);
      navigate("/register");
    } catch (error) {
      window.alert(error.message);
    }
  };

  async function onSearch(id) {
    const repeated = characters.find((char) => char.id === Number(id));
    if (repeated) return alert("Este personaje ya fue agregado!");
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const characterData = response.data;
      if (characterData.name) {
        setCharacters((oldChars) => [...oldChars, characterData]);
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  function onClose(id) {
    setCharacters((oldChars) =>
      oldChars.filter((char) => char.id !== Number(id))
    );
  }

  return (
    <div className="App">
      <GlobalStyle />
      {!showNavBar && !ShowNavBarII && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/register"
          element={<FormRegister register={register} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
