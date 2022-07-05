function exponencial(array, num){
    // Antes de ES2015 usavamos isso
    if(num === undefined){
        num = 1;
    }

    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

console.log(exponencial([1,2,3,4]));

console.log(exponencial([1,2,3,4], 4));

//Pos ES2015 podemos colocar valor default aqui
function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

console.log(exponencial([1,2,3,4]));

console.log(exponencial([1,2,3,4], 4));

// arguments dá para ver todos argumentos que foram passados
function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

console.log(findMax(1,2,3,6,90,1));