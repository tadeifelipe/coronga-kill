var altura  = 0;
var largura = 0;

function ajustarTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura,altura);
}

ajustarTamanhoPalcoJogo();

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 50;
    var posicaoY = Math.floor(Math.random() * altura) - 50;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoX = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX,posicaoY);

    //criar o elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    console.log(classe);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}


