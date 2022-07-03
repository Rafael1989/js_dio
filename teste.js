//var y = 0;
var x = 1;

/* 
Variavel é algo que pode variar
var z = 2;
var d = 4; */

var desconto = 1;
//Constante nao pode ser mudado
const PRECO = 2;

var total = PRECO - desconto;

function soma(a, b){ // declarar a funcao
    console.log(a+b);
    return a + b;
}

soma(3, 5); // chamar a funcao

console.log('Hello world!');

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} nao é par`)
        }
    }
    console.log('Os números pares sao: ', evenNums);
}

let array = [1,2,4,5,7,8];

returnEvenValues(array);