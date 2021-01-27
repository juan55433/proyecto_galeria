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

//EventListener

formregisterUI.addEventListener('submit',(e) =>{
    e.preventDefault();
    let userUI = document.querySelector('#user').value;
    let pwUI = document.querySelector('#password').value;
    let pwrpUI = document.querySelector('#password-repeat').value;
    let emailUI = document.querySelector('#email').value;
    let numberUI = document.querySelector('#number').value;
    console.log(userUI);
    console.log(pwUI);
    console.log(pwrpUI);
    console.log(emailUI);
    console.log(numberUI);
})