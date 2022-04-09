function comparador() { 
	return Math.random() - 0.5; 
}

function popularArray (quantidade) {
    let arrayCartas = ["img/bobrossparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif"];
    console.log(arrayCartas);
    arrayCartas.sort(comparador);
    console.log("After the change: " + arrayCartas);

    let arrayAtual = [];

    for(let i = 0; i < (quantidade/2); i++) {
        arrayAtual.push(arrayCartas[i]);
    }

    for(let i = 0; i < (quantidade/2); i++) {
        arrayAtual.push(arrayCartas[i]);
    }

    arrayAtual.sort(comparador);

    return arrayAtual;
} 

function distribuirCartas(quantidade){
    let arrayCartas = popularArray(quantidade);
    let table = document.querySelector(".table");

    for(let i = 0; i < quantidade; i++) {
        table.innerHTML += `
        <div class="card" onclick="virarDesvirar(this)">
            <div class="face">
                <img src="img/front.png" alt="">
            </div>
            <div class="hidden">
                <img src=${arrayCartas[i]} alt="">
            </div>
        </div>
        `
    }
}

function virarDesvirar(carta) {
    console.log("Clicooooou!")
}

let numCartas = 14;

//let numCartas = prompt("Deseja jogar com quantas cartas?");

// while(numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14){
//     numCartas = prompt("Deseja jogar com quantas cartas?");
// }

distribuirCartas(numCartas);