function Esgotado (idElementoclicado) {
    document.querySelector(idElementoclicado).innerHTML ='Produto Esgotado &#128543;';
}

const listadebotoes = document.querySelectorAll('.botao-comprar');

for (let count = 0; count < listadebotoes.length; count++) {
    
    const seletordebotao = listadebotoes[count].classList[1];
    const idbotao = `#disponivel_${seletordebotao}`; 
    
    listadebotoes[count].onclick = function () {
        Esgotado(idbotao);              
}

}

function Carrinhovazio (idclick) {
    document.querySelector(idclick).innerHTML ='Estamos sem Estoque no momento &#128543;';
}

const botoescarrinho = document.querySelectorAll('.add-cart');

for (let count = 0; count < listadebotoes.length; count++) {

    const definebotao = botoescarrinho[count].classList[1];
    const classecarrinho = `#indisponivel_${definebotao}`;


    botoescarrinho[count].onclick = function() {
        Carrinhovazio(classecarrinho);
}

}

function darkmode () {
    document.querySelector('Body').style.background = "Black";
    document.querySelector('Body').style.color = "White"
}

document.querySelector('#darkmode').addEventListener("click", darkmode);