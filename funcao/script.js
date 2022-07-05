// funcao anonima
const soma = function(a, b){
    return a + b;
}

console.log(soma(1,2));
console.log(soma(3,5));

// funcao autoinvocavel
(
    function(){
        let name = "Rafael";
        console.log(name);
        return name;
    }
)();

(
    function(a,b){
        console.log(a+b);
        return a+b;
    }
)(1,2);

const sum = (
    function(a,b){
        console.log(a+b);
        return a+b;
    }
)(1,2);

console.log(sum);

//callbacks
const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const som = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1,2 );
const resultSub = calc(sub, 1, 2);

console.log(resultSoma);
console.log(resultSub);
