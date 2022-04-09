let numCartas = prompt("Deseja jogar com quantas cartas?");

while(numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14){
    numCartas = prompt("Deseja jogar com quantas cartas?");
}

