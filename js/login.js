const formloginUI = document.querySelector('#forming');
formloginUI.addEventListener('submit',(e) =>{
    e.preventDefault();
    var validacion = localStorage.getItem(localStorage.key(0));
    let userUI = document.querySelector('#user').value;
    let pwUI = document.querySelector('#password').value;
    if(validacion.includes(userUI) && validacion.includes(pwUI)){
        window.alert("bienvenido");
        console.log(true);
    }
    
});

