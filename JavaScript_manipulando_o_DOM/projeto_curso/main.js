
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
//constante de lista com todos os itens do atributo de dados criado para armazenar o + e -
const controle = document.querySelectorAll('[data-controle]');
//constante que lista todas as estatisticas do robo
const estatisticas = document.querySelectorAll('[data-estatistica]');
const cor = document.querySelectorAll('[data-cor]')

function mudaCor(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
}

//funcao para alterar os dados do robo
function manipulaDados(eventoclicado, classepai){
    //constante que busca o atributo de dados presente na classe que é filha da classe contador
    //o atributo de dados ajuda a no caso de um valor de uma classe mudar o código todo não irá ser perdido, como por exemplo na classe controle-ajuste, se decidissem mudar os simbolos de + e - para outra coisa a função criada seria perdida
    const peca = classepai.querySelector("[data-contador]");
    //if-else de soma e subtração usando como comparação o texto contido no evento que foi clicado
    if (eventoclicado=== '-'){
        peca.value = parseInt(peca.value) - 1;
    } else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca){
    estatisticas.forEach((elemento)=>{
        console.log(elemento.dataset.estatistica);
        console.log(elemento.textContent);
        elemento.textContent= parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })

}

//funcão que percorre todos os itens da lista controle
controle.forEach((elemento)=>{ 
    //adiciona um evento a lista sempre que o elemento for clicado
    elemento.addEventListener("click", (evento)=>{
        //nova função que chama a função de manipular dados com o texto contido no data-controle do evento clicado(+ ou -) e a classe pai dessa classe(controle)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    }) 
});
