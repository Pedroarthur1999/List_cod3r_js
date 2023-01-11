//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function soma(num1,num2) {
    const soma = num1+num2;
    const subtração = num1-num2;
    const multiplicação = num1*num2;
    const divisão = num1/num2;
    
    console.log(`
    Soma:${soma}
    Subtração:${subtração}
    Multiplicação:${multiplicação}
    divisão:${divisão}`
    );
}

soma(1,2)
