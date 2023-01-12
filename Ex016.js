function calculadora(num1,num2,sinal) {

    switch (sinal) {
        case '+':
            console.log(num1+num2);
            break;
        case '-':
            console.log(num1-num2);
            break;
        case '*':
            console.log(num1*num2);
            break;
        case '/':
            console.log(num1/num2);
            break;
        default:
            console.log('Operação invalida');
            break;
    }

    
}
calculadora(2,2,'*')