// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxa, tempo) {

    const porcentagem = taxa / 100
    return capital + (capital * porcentagem) * tempo

}

function jurosCompostos(capital, taxa, tempo) {

    return (capital * (1+taxa) ** tempo).toFixed(2)
    
}

const valorSimples = jurosSimples(100, 10, 2)
const valorComposto = jurosCompostos(100,10/100,2)
console.log(valorSimples);
console.log(valorComposto);