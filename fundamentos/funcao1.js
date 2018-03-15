// função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // Not a Number (NaN)
imprimirSoma(2,10,4,5,6,7) // utiliza apenas 2 parametros e ignora os demais
imprimirSoma() // Not a Number (NaN)

function soma(a, b=1){
    return a+b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // NaNisantos
