function comparador() { 
	return Math.random() - 0.5; 
}

function popularArray (quantidade) {
    let arrayCartas = ["img/bobrossparrot.gif", "img/explodyparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/vertitparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif"];
    console.log(arrayCartas);
    arrayCartas.sort(comparador);
    console.log("After the change: " + arrayCartas);

    let arrayAtual = [];

    for(let i = 0; i < quantidade; i++) {
        arrayAtual.push(arrayCartas[i]);
    }

    return arrayAtual;
} 





let numCartas = prompt("Deseja jogar com quantas cartas?");

while(numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14){
    numCartas = prompt("Deseja jogar com quantas cartas?");
}

distribuirCartas(numCartas);