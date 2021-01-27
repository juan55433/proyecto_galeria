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
    localStorage.setItem('registro',JSON.stringify(arrayRegistro));
}

//EventListener

formregisterUI.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    let userUI = document.querySelector('#user').value;
    let pwUI = document.querySelector('#password').value;
    let pwrpUI = document.querySelector('#password-repeat').value;
    let emailUI = document.querySelector('#email').value;
    let numberUI = document.querySelector('#number').value;
    if(userUI.length == 0 || pwUI.length == 0 || pwrpUI.length == 0 || emailUI.length == 0 || isNaN(numberUI)) 
    {
        window.alert("Todos los caracteres son obligatorios!");
        formregisterUI.reset(); 
    }
    if(pwUI != pwrpUI){
        window.alert("Las contraseñas deben coincidir");
    }
    else{
        CrearUsuario(userUI, pwUI, pwrpUI, emailUI,numberUI);
        GuardarDB();
        formregisterUI.reset(); 
    }
});

