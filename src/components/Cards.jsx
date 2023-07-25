import Card from './Card';
import React from 'react';
import styled from 'styled-components';

const Tarjetas = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-left: 50px;
   margin-right: 50px;
`

export default function Cards({characters , onClose}) {
   return (
   <Tarjetas>
      {characters.map((personaje) => {
         return(
            <Card
               key={personaje.id}
               id={personaje.id}
               image={personaje.image}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species}
               gender={personaje.gender}
               origin={personaje.origin}
               onClose={onClose}
               />
         )
      })}
   </Tarjetas>)
}