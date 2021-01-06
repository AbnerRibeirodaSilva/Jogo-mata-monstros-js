//recuperando dimensoes da tela do usuario para se adequar  
var altura = 0
var largura = 0
var lifes = 0
var time = 30

var timecreate = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil') {
    timecreate = 1500
} else if (nivel === 'medio') {
    timecreate = 1000
} else if (nivel === 'dificil') {
    timecreate = 800
}


function ajustarTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth

}
ajustarTamanho()

//Cronometro do jogo
var cronometro = setInterval(function() {
    time -= 1

    if (time < 0) {
        clearInterval(criarmonstros)
        clearInterval(cronometro)
        window.location.href = 'win.html'

    } else {
        document.getElementById('cronometro').innerHTML = time
    }
}, 1000)


//Criando posições aleatorias nos limites da tela 

function posicaoRandom() {

    //Remover bruxas 
    if (document.getElementById('bruxas')) {
        document.getElementById('bruxas').remove()
        lifes++
        document.getElementById('l' + lifes).src = ('imagens/coracao_vazio.png')
    }
    //Remover fantasmas 
    if (document.getElementById('ghost')) {
        document.getElementById('ghost').remove()
        lifes++
        document.getElementById('l' + lifes).src = ('imagens/coracao_vazio.png')
    }
    //Remover morcegos
    if (document.getElementById('bat')) {
        document.getElementById('bat').remove()
        lifes++
        document.getElementById('l' + lifes).src = ('imagens/coracao_vazio.png')
    }


    if (lifes > 2) {
        window.location.href = 'gameOver.html'
    }


    var eixoX = Math.floor(Math.random() * largura) - 190
    var eixoY = Math.floor(Math.random() * altura) - 200

    eixoX = eixoX < 0 ? 0 : eixoX
    eixoY = eixoY < 0 ? 0 : eixoY



    //Criando elementos "Bruxas,Fantasmas e monstros" em cordenadas aleatorias 
    var bixos = Math.floor(Math.random() * 3)

    if (bixos == 0) {
        var bruxa = document.createElement('img')
        bruxa.src = ('imagens/bruxa.png')
        bruxa.className = tamanhosBruxa() + ' ' + ladoAleatorio()
        bruxa.style.left = eixoX + 'px'
        bruxa.style.top = eixoY + 'px'
        bruxa.style.bottom = '6px'
        bruxa.style.position = 'absolute'
        bruxa.id = 'bruxas'
        bruxa.onclick = function() {
            this.remove()

        }


        document.body.appendChild(bruxa)
    } else if (bixos == 1) {
        var ghost = document.createElement('img')
        ghost.src = ('imagens/ghost.png')
        ghost.className = tamanhosGhost() + ' ' + ladoAleatorio()
        ghost.style.left = eixoX + 'px'
        ghost.style.top = eixoY + 'px'
        ghost.style.position = 'absolute'
        ghost.style.bottom = '6px'
        ghost.id = 'ghost'
        ghost.onclick = function() {
            this.remove()

        }

        document.body.appendChild(ghost)
    } else {
        var bat = document.createElement('img')
        bat.src = ('imagens/morcego.png')
        bat.className = tamanhosBat() + ' ' + ladoAleatorio()
        bat.style.left = eixoX + 'px'
        bat.style.top = eixoY + 'px'
        bat.style.bottom = '6px'
        bat.style.position = 'absolute'
        bat.id = 'bat'
        bat.onclick = function() {
            this.remove()

        }

        document.body.appendChild(bat)

    }
}

//Criação de bruxas com tamanhos aleatorios

function tamanhosBruxa() {
    var classe1 = Math.floor(Math.random() * 3)

    switch (classe1) {
        case 0:
            return 'bruxa1'
        case 1:
            return 'bruxa2'
        case 2:
            return 'bruxa3'
    }
}

//Criação de fantasmas com tamanhos aleatorios

function tamanhosGhost() {
    var classe2 = Math.floor(Math.random() * 3)

    switch (classe2) {
        case 0:
            return 'ghost1'
        case 1:
            return 'ghost2'
        case 2:
            return 'ghost3'
    }
}
//Criação de morcegos com tamanhos aleatorios
function tamanhosBat() {
    var classe3 = Math.floor(Math.random() * 3)

    switch (classe3) {
        case 0:
            return 'bat1'
        case 1:
            return 'bat2'
        case 2:
            return 'bat3'
    }
}


//Definindo lados aleatorios para onde o zumbi estara virado
console.log(ladoAleatorio())

function ladoAleatorio() {
    var lados = Math.floor(Math.random() * 2)

    switch (lados) {
        case 0:
            return 'ladoE'
        case 1:
            return 'ladoD'
    }




}
