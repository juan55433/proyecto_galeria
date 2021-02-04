/*eslint-env es6*/
function inicio(){
    const button = document.querySelector('button');
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');
    button.addEventListener('click', () => {
    popup.style.display = 'block';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    popup.addEventListener('click', e => {
        // console.log(e);
        if(e.target.className === 'popup-wrapper') {
            popup.style.display = 'none';
        }
    })
}
window.onload = inicio;

