const ListaDeTelefone = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for(let contador =0; contador<ListaDeTelefone.length; contador++){
    
    const tecla = ListaDeTelefone[contador];
   tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
    tecla.onkeydown = function(){
      tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
    }
}
