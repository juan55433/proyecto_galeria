//variables globales
const formregisterUI = document.querySelector('#form-ing');
let arrayRegistro = [];
//funciones
const CrearUsuario = (usuario) => {
    let item = {
        usuario: '',
        contraseña:'',
        contraseñarep:'',
        email:'',
        numeroTelefono:''
    }   
    arrayRegistro.push(item);
    return item;
}

let userprueba = CrearUsuario('nuevoUsuario');
let userpruebab = CrearUsuario('nuevoUsuarioo');
console.log(userprueba);
console.log(userpruebab);