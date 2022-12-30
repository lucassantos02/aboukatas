function add(x, y) {
    let soma = x + y;
    return soma;
};

function multiply(a, b) {
    let result = 0;
    for (let i =0; i < b; i++){
    result = add(result, a) ;
    };
    return result;
};

function power(numero, expoente) {
    let result = 1;
    for (let j = 0; j < expoente; j++) {
        result = multiply(result, numero);
    }
    return result;
};

function factorial(fatorial) {
    let result = 1;
    for (let i = fatorial; i > 1; i--) {
        result = multiply(result, i);
    };
    return result;
};