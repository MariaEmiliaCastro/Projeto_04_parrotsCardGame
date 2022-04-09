let viradosFlag = 1;
let jogadas = 0;
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
            <div class="face">
                <img src="img/front.png" alt="">
            </div>
            <div name="cartaAtras" class="back-face face hidden">
                <img src=${arrayCartas[i]} alt="">
            </div>
        </div>
        `
    }
}

let primeiraVirada = 'a';

function virarDesvirar(carta) {
    const lados = carta.children;

    const frenteira = lados[0];
    const traseira = lados[1];

    if (traseira.classList.contains("hidden")) {
        if (viradosFlag === 1) {
            //frenteira.class = "front-face face"
            traseira.classList.remove("hidden");
            traseira.classList.add("virada");
            primeiraVirada = carta;
            viradosFlag++;
            jogadas++;
        }else if(viradosFlag === 2){
            //frenteira.class = "front-face face"
            traseira.classList.remove("hidden");
            viradosFlag++;
            console.log(viradosFlag);
            jogadas++;
            if(traseira.innerHTML === primeiraVirada.children[1].innerHTML){
                traseira.classList.add("virada");
                viradosFlag -= 2;
                console.log(viradosFlag);
                numCartas = numCartas - 2;
                console.log("SAO IGUAIS");
                if(numCartas === 0){
                    alert(`Voce ganhou em ${jogadas} jogadas!`);
                    const reiniciar = prompt("Gostaria de reiniciar a partida?");
                    if(reiniciar === "sim"){
                        location.reload();
                    }else if (reiniciar === "não"){
                        alert("BLZ! Flw!")
                    }else{
                        alert("DIGITA DIREITO, É sim OU não!")
                    }
                }
            }else{
                setTimeout(() => {
                    console.log("SAO DIFERENTES!");
                    traseira.classList.add("hidden");
                    primeiraVirada.children[1].classList.remove("virada")
                    primeiraVirada.children[1].classList.add("hidden");
                    console.log(viradosFlag);
                    viradosFlag -= 2;
                    console.log(viradosFlag);
                }, 2000)
            }
        }
    }
}

let numCartas = prompt("Deseja jogar com quantas cartas?");

while(numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14){
    numCartas = prompt("Deseja jogar com quantas cartas?");
}

distribuirCartas(numCartas);