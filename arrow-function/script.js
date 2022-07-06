const helloWorld = function(){
    return "Hello World";
}

const helloWorld2 = () => {
    return "Hello World";
}

const helloWorld3 = () => "Hello World"; // As tres sao a mesma coisa (Quando tem uma linha pode tirar o return e as chaves)

console.log(helloWorld());
console.log(helloWorld2());
console.log(helloWorld3());

const soma = (a,b) => a + b;
console.log(soma(4,6)); // SÓ 1 LINHA PODE DISPENSAR AS CHAVES E O RETURN

//console.log(soma2(4)); // NAO PODE CHAMAR ANTES DE DECLARAR, ARROW FUNCTION
const soma2 = a => a;
console.log(soma2(4)); // só 1 PARAMETRO, PODE DISPENSAR OS PARENTESES

/*
METODOS CALL; APPLY DO THIS NAO FUNCIONARAO NA ARROW FUNCTION
NAO EXISTE O OBJETO ARGUMENTS
O CONSTRUTOR NAO PODE SER UTILIZADO
*/
