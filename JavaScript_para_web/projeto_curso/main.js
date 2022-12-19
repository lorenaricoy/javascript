function TocaSom(idAudio){
    const elemento = document.querySelector(idAudio);

    if(elemento!=null && elemento.localName==='audio'){
        elemento.play();
    } else{
        alert('Elemento não existente');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for(let contador =0; contador<ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        TocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.remove('ativa');
        }
    }
}
