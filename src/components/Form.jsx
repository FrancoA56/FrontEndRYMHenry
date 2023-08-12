import React, { useState } from "react";
import Styled from "styled-components";
import { Validate } from "./validation";

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
`;

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
    width: 120%;
    text-align: center;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 35px;
    font-family: 'Josefin Sans';
    &:-webkit-autofill {
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
}
`;

const Button = Styled.button`
    background-image: linear-gradient(45deg, #000000, #4b0a84, #000000);
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
    transition: background-image 1s ease-in-out, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out, font-size 0.3s ease-in-out;
    &:hover {
      background-image: linear-gradient(45deg, #ffffff, #b055ff, #ffffff);
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
      color : black;
      font-size: 300%;
    }
`;


const FormContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(61, 0, 71, 0.5);
    margin-top: 100px;
    margin-left: 32%;
    margin-right: 32%;
    padding: 100px;
    border-radius: 100px;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: rgba(61, 0, 71, 0.7);
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
    }
    &:focus-within {
    background-color: rgba(61, 0, 71, 0.9);
  }

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
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Email = Styled.div`
    flex-direction: row-reverse;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Constrasenia = Styled.div`
    flex-direction: row;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Errores = Styled.p`
    font-family: 'Josefin Sans';
    font-weight: 400;
    font-size: 25px;
    text-decoration: none;
    color: rgb(255, 0, 0);
    background-color: rgb(61, 0, 71, 0.9);
    padding-top: 10px;
    padding-bottom: 5px;
    border-radius: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;

export default function Form({ login }) {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    user: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      Validate({
        ...userData,
        [name]: value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <>
      <Titulo>Inicia Sesion!</Titulo>
      <FormContainer>
        <Formulario onSubmit={handleSubmit}>
          <Usuario>
            <Label htmlFor="">Usuario:</Label>
            <Input
              type="text"
              name="user"
              placeholder="Usuario"
              onChange={handleChange}
            />
            {errors.usuario && <Errores>{errors.usuario}</Errores>}
          </Usuario>
          <Email>
            <Label htmlFor="">Email:</Label>
            <Input
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
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
            {errors.password && <Errores>{errors.password}</Errores>}
          </Constrasenia>
          <Button type="submit">Ingresar</Button>
        </Formulario>
      </FormContainer>
    </>
  );
}
