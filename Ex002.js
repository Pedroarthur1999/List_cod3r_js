//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function verificaTipoTriangulo(num1,num2,num3){
    if(num1===num2 && num1===num3){
        return 'Equilatero'
    }
    if(num1===num2 && num1!==num3 || num1!==num2 && num1===num3 ){
        return 'Isósceles'
    }
    else{
        return 'Escaleno'
    }

}

const verifica = verificaTipoTriangulo(3,2,3)

console.log(verifica);