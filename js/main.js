let viradosFlag = 1;
let jogadas = 0;
let primeiraVirada = 'a';

function comparador() {
    return Math.random() - 0.5;
}

function popularArray(quantidade) {
    let arrayCartas = ["img/bobrossparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif"];
    console.log(arrayCartas);
    arrayCartas.sort(comparador);
    console.log("After the change: " + arrayCartas);

    let arrayAtual = [];

    for (let i = 0; i < (quantidade / 2); i++) {
        arrayAtual.push(arrayCartas[i]);
    }

    for (let i = 0; i < (quantidade / 2); i++) {
        arrayAtual.push(arrayCartas[i]);
    }

    arrayAtual.sort(comparador);

    return arrayAtual;
}

function distribuirCartas(quantidade) {
    let arrayCartas = popularArray(quantidade);
    let table = document.querySelector(".table");

    for (let i = 0; i < quantidade; i++) {
        table.innerHTML += `
        <div class="card" onclick="virarDesvirar(this)">
            <div class="front-face face">
                <img src="img/front.png" alt="">
            </div>
            <div name="cartaAtras" class="back-face face hidden">
                <img src=${arrayCartas[i]} alt="">
            </div>
        </div>
        `
    }
}

function desvirarCarta(cartaAnterior, cartaAtual) {
    cartaAnterior.children[1].classList.remove("virada");
    cartaAnterior.children[1].classList.add("hidden");

    cartaAnterior.children[0].classList.remove("clicked");
    cartaAnterior.children[1].classList.remove("clicked");

    cartaAtual.children[1].classList.add("hidden");
    cartaAtual.children[0].classList.remove("clicked");
    cartaAtual.children[1].classList.remove("clicked");
}

function virarDesvirar(carta) {
    if (carta.children[1].classList.contains("hidden")) {
        if (viradosFlag === 1) {
            carta.children[1].classList.remove("hidden");
            carta.children[1].classList.add("virada");
            carta.children[1].classList.add("clicked");
            carta.children[0].classList.add("clicked");
            primeiraVirada = carta;
            viradosFlag++;
            jogadas++;
        } else if (viradosFlag === 2) {
            carta.children[1].classList.remove("hidden");
            carta.children[1].classList.add("clicked");
            carta.children[0].classList.add("clicked");
            viradosFlag++;
            jogadas++;
            if (carta.children[1].innerHTML === primeiraVirada.children[1].innerHTML) {
                carta.children[1].classList.add("virada");
                viradosFlag -= 2;
                numCartas = numCartas - 2;
                if (numCartas === 0) {
                    
                    setTimeout(() => {
                        alert("Voce ganhou em " + jogadas + " jogadas!");
                        const reiniciar = prompt("Gostaria de reiniciar a partida?");
                        if (reiniciar === "sim") {
                            location.reload();
                        } else if (reiniciar === "não") {
                            alert("BLZ! Flw!");
                        }
                    }, 500);
                }
            } else {
                setTimeout(() => {
                    desvirarCarta(primeiraVirada, carta);
                    viradosFlag -= 2;

                }, 2000)
            }
        }
    }
}

let numCartas = prompt("Deseja jogar com quantas cartas?");

while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
    numCartas = prompt("Deseja jogar com quantas cartas?");
}

distribuirCartas(numCartas);