const validation = (userData) =>{
    let errors={};
    if (!userData.username){
        errors.username="Este campo no puede estar vacío"
    }
    if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{3})$/i.test(userData.username)){
        errors.username = "El email es invádilo"
    }
    if(userData.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres"
    }

    if (userData.password.length < 6 || userData.username.length>10){
        errors.password="La contraseña debe contener entre 6 y 10 caracteres"
    }
    else if (!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un número"
    }
    else if(userData.password.length < 6 && userData.username.length>10){
        errors.password =""
    }
    return errors;

}
export default validation;