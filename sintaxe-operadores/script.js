function compare(num1, num2){
    const iguais = num1 === num2;
    const soma = num1 + num2;
    const maiorQue10 = soma > 10;
    const menorQue20 = soma < 20;
    const textoMaiorQue10 = (maiorQue10 ? 'maior' : 'menor');
    const textoMenorQue20 = (menorQue20 ? 'menor' : 'maior');
    const textoSaoIguais = (iguais ? ' sao ' : ' nao sao ');
    return `Os números ${num1} e ${num2} ${textoSaoIguais} iguais. Sua soma é ${soma}, que é ${textoMaiorQue10} que 10 e ${textoMenorQue20} que 20.`;
}

console.log(compare(1,2));