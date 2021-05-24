

var altura = 0
var largura = 0
var vidas = 1
var criaMosquito=1500
var tempo = 10

var local=window.location.search
local = local.replace('?','')
if(local ==='normal'){

}
else if(local === 'dificil'){
criaMosquito=1000
}
else if(local === 'chucknorris'){
    criaMosquito=750
}

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {

        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function ajustaTamanho() {

    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)

}

ajustaTamanho()

function posicaoRandom() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        }
        vidas++
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    document.body.appendChild(mosquito)
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    console.log(ladoAleatorio())
    mosquito.onclick = function () {
        this.remove()
    }


}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }

}