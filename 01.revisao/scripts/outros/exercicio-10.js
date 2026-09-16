function exercicio10(string){

let texto = ""

texto = string


if (texto.length <= 5 ){
    console.log(`A string ${texto} é pequena`)
}else if (texto.length <= 10 ){
    console.log(`A string ${texto} é média`)
}else if (texto.length > 10 ){
    console.log(`A string ${texto} é grande`)
}

}
export default exercicio10;
