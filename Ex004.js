// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function operação(dividendo,divisor) {
    const divisao = dividendo/divisor
    const resto = dividendo % divisor

    console.log("Divisão:"+divisao+'\n'+"Resto:"+resto);
    
}
operação(5,2)