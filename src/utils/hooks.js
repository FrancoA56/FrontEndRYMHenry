import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const showNavBar = location.pathname === '/';

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  export {characters, setCharacters, useNavigate, useLocation, showNavBar, useEffect, access, setAccess}
