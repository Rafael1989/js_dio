function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); // divide o array em 3 numeros (spread)

function confereTamanho(...args){ // vai transforma os numeros separados em virgula em um array (rest)
    console.log(args.length)
}

confereTamanho()
confereTamanho(1,2)
confereTamanho(3,4,5)