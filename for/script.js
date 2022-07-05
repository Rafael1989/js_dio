function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2,33,456,356,40];

console.log(multiplicaPorDois(meusNumeros));

function forInExemplo(obj){
    for(prop in obj){ // prop sao as propriedades do objeto
        console.log(obj[prop]);
    }

    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Joao",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra);

function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30,20,233,2];

logLetras(nums);