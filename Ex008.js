// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo)

let stringJogos = "30, 40, 20, 4, 51, 25, 42, 38, 56"

function comparaValores(stringJogos) {
    let valores = stringJogos.split(',')
    let maior = valores[0]
    let menor = valores[0]
    console.log(typeof(valores));

    for (let i = 1; i < valores.length; i++){

        if(valores[i] > maior){
            maior = valores[i]
            console.log(maior);
        }
        if(valores[i] < menor){
            menor = valores[i]
            console.log(menor);
        }
        
    }
    
}
comparaValores(stringJogos)
