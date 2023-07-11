import {setAccess} from '../hooks';
import { navigate } from '../hooks';
import { USUARIO, CONTRASE, EMAIL } from '../usuarios';

const login = (userData) => {
    if (userData.password === CONTRASE && userData.email === EMAIL && userData.usuario === USUARIO) {
      setAccess(true);
      navigate('/home');
    } else return window.alert('Cuenta incorrecta');
  };

export {login};