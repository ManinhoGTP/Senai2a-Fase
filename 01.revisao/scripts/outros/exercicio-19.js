import numeros from "./variaveis";

function exercicio19(){

let listaNumeros = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] %3 == 0){
        listaNumeros.push("Fizz")
    }else if(numeros[i] %5 == 0){
        listaNumeros.push("Buzz")
    }else if(numeros[i] %3 == 0 && numeros[i] %5 == 0){
        listaNumeros.push("Fizz Buzz")
    }else{
        listaNumeros.push(numeros[i])
    }
}

console.log(listaNumeros)
}

export default exercicio19;
