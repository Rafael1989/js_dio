const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome); // o this vai se referir ao objeto passado atraves do call
}

getSomething.call(pessoa);

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // nesse caso vai usar o call para passar um objeto, além dos argumentos

const pessoa2 = {
    nome: 'Miguel',
};

const animal2 = {
    nome: 'Godi',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa2); // o this vai usar o valor do objeto passado

const myObj2 = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1,5]); // tambem podemos enviar array

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'}); // vai jogar a funcao já passando o parametro Bruno para a variavel
 
console.log(bruno()); // agora podemos executar a variavel como se fosse a funcao ja com o parametro