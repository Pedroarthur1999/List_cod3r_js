// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero) {
    let res = 1
    for (let i = numero; i > 0; i--){
        res *= i
    }
    console.log(res);
}
fatorial(3)