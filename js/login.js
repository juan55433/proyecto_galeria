document.addEventListener('DOMContentLoaded', credenciales);
const VerLogin = ()  =>{
    formregisterUI.innerHTML ='';
    arrayRegistro = JSON.parse(localStorage.getItem('registro'));
    if(arrayRegistro === null){
        arrayRegistro = [];
    }
    else{
        arrayRegistro.forEach(Element =>{
           console.log(element);     
        });
    }
}