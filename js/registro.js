//variables globales
const formregisterUI = document.querySelector('#form-ing');
let arrayRegistro = [];
//funciones
const CrearUsuario = (user, pw, pwrp, email, number) => {
    let item = {
        user: user,
        pw:pw,
        pwrp:pwrp,
        email:email,
        number:number
    }   
    arrayRegistro.push(item);
    return item;
}

const GuardarDB = () =>{
    
}
//EventListener

formregisterUI.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    let userUI = document.querySelector('#user').value;
    let pwUI = document.querySelector('#password').value;
    let pwrpUI = document.querySelector('#password-repeat').value;
    let emailUI = document.querySelector('#email').value;
    let numberUI = document.querySelector('#number').value;
    
    CrearUsuario(userUI, pwUI, pwrpUI, emailUI,numberUI);
    formregisterUI.reset(); 
    
});