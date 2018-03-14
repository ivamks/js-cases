function soma(x, y, callback) {
    var z;
    setTimeout(() => {
        z = x + y;
        callback(z);
    }, 500);
}

var result = soma(2, 3, function(resultado){
    console.log('Resultado:', resultado);
});
console.log('FIM');