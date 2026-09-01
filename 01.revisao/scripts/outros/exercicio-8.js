function exercicio8(){

let frutas = ["banana", "morango", "uva"]

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

frutas.push("Laranja")

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

frutas.pop()

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

}
export default exercicio8;
