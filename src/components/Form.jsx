import React, { useState } from 'react';
import Styled  from 'styled-components';
import { Validate } from './validation';

const Titulo = Styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(251, 255, 0);
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 500px;
    margin-right: 500px;
    padding: 20px;
    background-color: rgba(61, 0, 71, 0.5);
    border-radius: 40px;
    text-align: center;
    font-family: 'Josefin Sans';
`
const Formulario = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = Styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 2px solid white;
    padding: 20px;
    color: white;
    outline: none;
    width: 30%;
    text-align: center;
    margin-left: 20px;
    font-size: 35px;
    font-family: 'Josefin Sans';
`;

const InputEmail = Styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 2px solid white;
    padding: 20px;
    color: white;
    outline: none;
    width: 100%;
    text-align: center;
    margin-left: 20px;
    font-size: 35px;
    font-family: 'Josefin Sans';
`

const Button = Styled.button`
    background-color: rgba(4, 4, 65, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Josefin Sans';
    font-weight: 400;
    font-size: 200%;
    text-decoration: none;
    margin-top: 60px;
`;

const FormContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(61, 0, 71, 0.5);
    margin-top: 100px;
    margin-left: 5%;
    margin-right: 5%;
    padding: 100px;
    border-radius: 100px;

`;

const Label = Styled.label`
    font-family: 'Josefin Sans';
    font-weight: 400;
    font-size: 40px;
    text-decoration: none;
    color: rgb(251, 255, 0);
`;

const Usuario = Styled.div`
    flex-direction: row;
    margin-top: 20px;
`;

const Email = Styled.div`
    flex-direction: row-reverse;
    margin-top: 20px;
`;

const Constrasenia = Styled.div`
    flex-direction: row;
    margin-top: 20px;
`;

const Errores = Styled.p`
    font-family: 'Josefin Sans';
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    color: rgb(255, 0, 0);
`;


export default function Form ({login}) {
    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        usuario: "",
        email: "",
        password: "",
      });


    function handleChange(event){
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value,
       })

       setErrors(Validate({
        ...userData, 
        [name]: value
    }));
      };

    function handleSubmit(event){
            event.preventDefault();
            login(userData)
        };

    return(
        <>
        <Titulo>Inicia Sesion!</Titulo>
    <FormContainer>
        <Formulario onSubmit={handleSubmit}>
            <Usuario>
            <Label htmlFor="">Usuario:</Label>
            <Input 
            type="text" 
            name="usuario"
            placeholder="Usuario"
            onChange={handleChange}
            />
            {errors.usuario && <Errores>{errors.usuario}</Errores>}
            </Usuario>
            <Email>
            <Label htmlFor="">Email:</Label>
            <InputEmail 
            type="text" 
            name="email"
            placeholder="Email"
            onChange={handleChange}
            />
            {errors.email && <Errores>{errors.email}</Errores>}
            </Email>
            <Constrasenia>
            <Label htmlFor="">Contraseña:</Label>
            <Input 
            type="password" 
            name='password'
            placeholder="Contraseña"
            onChange={handleChange}
            />
            {errors.password && <Errores>{errors.password}</Errores>}
            </Constrasenia>
            <Button type="submit">Ingresar</Button>
        </Formulario>
    </FormContainer>
    </>
    )
}