import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const BotonClose = styled.button`
   background-color: rgb(12, 34, 63);
   color: rgba(255, 255, 255, 0.575);
   font-family: 'Get Schwifty';
   font-weight: bold;
   border: none;
   outline: none;
   position: absolute;
   right: 0;
   top: 0;
`;
const Carta = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   position: relative;
   background-color: rgb(61, 0, 71, 0.5);
   margin-bottom: 15px;
`;
const NombrePersonaje = styled.h2`
   position: absolute;
   bottom: 0;
   left: 0;
   padding: 10px;
   margin: 0;
   margin-bottom: 4px;
   background-color: rgba(99, 83, 83, 0.5);
   color: #ffffff;
   width: 70%;
   font-family: 'Josefin Sans';
   font-size: 30px;
`;

const ContenedorStats = styled.div`
   display: flex;
   text-align: justify;
   
`
const Stats = styled.h2`
   font-size: 25px;
   font-weight: normal;
   font-family: 'Josefin Sans';
   color: #ffffff;
   margin-right: 20px;
   margin-bottom: 2px;
   margin-top: 15px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   max-width: 200px;
   position: relative;
   cursor: pointer;

   &:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 8px;
      background-color: rgba(0, 0, 0, 0.8);
      color: #ffffff;
      font-size: 12px;
      border-radius: 4px;
      white-space: nowrap;
   }
`;

const Imagen = styled.img`
   width: 300px;
   height: 300px;
   object-fit: cover;
   margin-bottom: 0;
   transition: transform 0.3s ease-in-out;
   &:hover{
      transform: scale(1.3);
   }
`

const ContenedorImagen = styled.div`
   position: relative;
   overflow: hidden;
`

const Card = (props) => {

   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();
   const location = useLocation();
   const enFavoritos = location.pathname === '/favorites';

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites, props.id]);

    const handleFavorites = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   };

    return (
       <Carta>
          {
            isFav ? (
               <button onClick={handleFavorites}>Fav: ❤️</button>
            ) : (
               <button onClick={handleFavorites}>Fav: 🤍</button>
            )
         }
          <ContenedorImagen>
          <Imagen src={props.image} alt="{props.name}" />
          {
            enFavoritos ? (
               <></>
            ) : (
               <BotonClose onClick={() => props.onClose(props.id)}>X</BotonClose>
            )
          }
          <NavLink to={`/detail/${props.id}`}>
          <NombrePersonaje>{props.name}</NombrePersonaje>
          </NavLink>
          </ContenedorImagen>
          <ContenedorStats>
          <Stats>{props.status}</Stats>
          <Stats>{props.gender}</Stats>
          </ContenedorStats>
          <Stats>{props.species}</Stats>
          <Stats>{props.origin.name}</Stats>
          
       </Carta>
    );
 };

 export default Card;