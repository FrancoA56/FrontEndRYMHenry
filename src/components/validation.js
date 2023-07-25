export function Validate (imputs) {
    const errors = {};
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    
    if (!imputs.user || imputs.user.length > 15) {
      errors.user = '*Se requiere un nombre de usuario de entre 1 a 15 digitos';
    }
    if (!imputs.email || imputs.email.length > 35) {
      errors.email = '*El correo electronico no debe estar vacio o tener mas de 35 caracteres';
    } else if (!emailRegex.test(imputs.email)) {
      errors.email = '*Debe ser un correo electrónico';
    }
    if (!imputs.password) {
        errors.password = '*La contraseña no puede estar vacia';
    } else if (imputs.password.length < 6 || imputs.password.length > 10) {
      errors.password = '*La contraseña debe tener entre 6 a 10 caracteres';
    } else if (!passwordRegex.test(imputs.password)) {
        errors.password = '*La contraseña debe incluir un numero';
    }
    return errors;
  };