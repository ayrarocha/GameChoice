let listadeNumerosSorteados = [];// lista de números sorteados
let numeroLimite = 10;// numero limite
let numeroSecreto = numAleatorio();// gerando um número aleatório
let tentativas = 0;// contando as tentativas
function verificarTexto(tag,palavras){// verificando o texto
    let texto = document.querySelector(tag);
    texto.innerHTML = palavras;
    responsiveVoice.speak(palavras, 'Brazilian Portuguese Female');//falando o texto com a voz do navegador importada no html
}
function mensagemIniciar(){// mensagem de inicio
    verificarTexto('h1','Jogo do número secreto!');
    verificarTexto('p','Escolha um número entre 1 e 10:');
}
mensagemIniciar();
function verificarChute(){// verificando o chute
    let chute = document.querySelector('input').value;// pegando o valor do input
    if (chute == numeroSecreto){
        tentativas++;
        verificarTexto('h1','Parabéns! Você acertou!');
        let palavras = tentativas > 1 ? 'tentativas' : 'tentativa';
        verificarTexto('p',`O número secreto era ${numeroSecreto}. Você acertou com apenas ${tentativas} ${palavras}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > numeroSecreto){
            verificarTexto('p','O número secreto é menor.');
            tentativas++;
        }
        else{
            verificarTexto('p','O número secreto é maior.');
            tentativas++;
        }
    }
    limpaCampo();
}
function limpaCampo(){// limpando o input
    document.querySelector('input').value = '';
}
function reiniciarJogo(){// reiniciar o jogo
    limpaCampo();
    tentativas = 0;
    mensagemIniciar();
    numeroSecreto = numAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled','true');// desabilitando o botão
}
function numAleatorio(){
    chute = parseInt(Math.random() * 10 + 1);// gerando um número aleatório entre 1 e 10
    if (listadeNumerosSorteados.includes(chute)) {// se o número gerado ja foi sorteado
        return numAleatorio(); // chamando a função novamente
    } else {// se o número gerado ainda nao foi sorteado
        listadeNumerosSorteados.push(chute);// adicionando o número sorteado na lista
        return chute;// retornando o número sorteado
    }
}