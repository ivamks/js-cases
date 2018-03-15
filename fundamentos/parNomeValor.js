// par nome/valor
const saudacao = 'Opa' // cotexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // cotexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de valres nome/valor

const cliente = {
    nome  : 'Pedro',
    idade : 32,
    peso  : 90,
    endereco:{
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())