//recuperando dimensoes da tela do usuario para se adequar  
let altura = 0
let largura = 0
let lifes = 1
let time = 30

let timecreate = 1500

let nivel = window.location.search
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
let cronometro = setInterval(function() {
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
    }
    //Remover fantasmas 
    if (document.getElementById('ghost')) {
        document.getElementById('ghost').remove()
        lifes++
    }
    //Remover morcegos
    if (document.getElementById('bat')) {
        document.getElementById('bat').remove()
        lifes++
    }

    if (lifes > 3) {
        window.location.href = 'gameOver.html'
    } else {

        document.getElementById('l' + lifes).src = ('/GameFinal/imagens/coracao_vazio.png')

    }


    let eixoX = Math.floor(Math.random() * largura) - 190
    let eixoY = Math.floor(Math.random() * altura) - 200

    eixoX = eixoX < 0 ? 0 : eixoX
    eixoY = eixoY < 0 ? 0 : eixoY



    //Criando elementos "Bruxas,Fantasmas e monstros" em cordenadas aleatorias 
    let bixos = Math.floor(Math.random() * 3)

    if (bixos == 0) {
        let bruxa = document.createElement('img')
        bruxa.src = ('/GameFinal/imagens/bruxa.png')
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
        let ghost = document.createElement('img')
        ghost.src = ('/GameFinal/imagens/ghost.png')
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
        let bat = document.createElement('img')
        bat.src = ('/GameFinal/imagens/morcego.png')
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
    let classe1 = Math.floor(Math.random() * 3)

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
    let classe2 = Math.floor(Math.random() * 3)

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
    let classe3 = Math.floor(Math.random() * 3)

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
    let lados = Math.floor(Math.random() * 2)

    switch (lados) {
        case 0:
            return 'ladoE'
        case 1:
            return 'ladoD'
    }




}