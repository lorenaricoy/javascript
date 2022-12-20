const lista = document.querySelector('[data-lista]');

function escondeTintas(){
    lista.setAttribute('data-lista', '');
}

function mostraTintas(){
    lista.removeAttribute('data-lista');
}