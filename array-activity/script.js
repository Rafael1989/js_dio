function updateArray(array){
    if(!array) return -1;
    if(!array.length) return -1;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 && array[i] !== 0){
            array[i] = 0;
        }
    }
    return array;
}

console.log(updateArray([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(updateArray([]));
console.log(updateArray(null));
console.log(updateArray(undefined));
console.log(updateArray(false));


//ARRAY
let array = []

array.push(3)

array

array.push(2)

array.pop()

array.push(2)

array.push(5)

array.shift() // remove do fim da lista

array.unshift(1) // adiciona no comeco da lista

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

array.includes(3) // tem o 3?

array.every(item => item === 5) // todos os numeros sao o 5?

array.some(item => item === 5) // algum é 5?

array.reverse() // para reverter a ordem dos elementos

// ARRAY PARAMS

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

//ARROW FUNCTION

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

//ATRIBUINDO VALORES

numerOne = 1;

console.log(numerOne + 2);


var firstName = 'Joao';
var lastName = "Souza";

if(firstName === "Joao"){
    var firstName = "Pedro";
    let lastName = "Silva";
}

console.log(firstName, lastName);

var firstName = 'Joao';
let lastName = "Souza";

if(firstName === "Joao"){
    let lastName = "Rodrigues";
    var firstName = "Pedro";
    lastName = "Silva";

    console.log(firstName, lastName);
}

console.log(firstName, lastName);

 //VARIAVEL

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

let array2 = [1,2,4,5,7,8];

returnEvenValues(array2);

// BOOLEAN

let validation = 3 === 0

validation = 3 === 3

validation = 3 > 4

validation = 3 > 2

validation = 3 >= 2

validation.toString()

!validation

!true

!false

// EMPTY; UNDEFINED; NULL

abacaxi

typeof abacaxi // undefined

let mamao 

typeof mamao // undefined

!mamao // true (oposto de undefined é true)

let uva = ""

typeof uva // string (Empty or "")

let pera = null

typeof pera // object (null)

!pera // true (oposto de null é true)

// FOR
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

// FUNCAO

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

//FUNCAO ATIVIDADE

const alunos = [{
    nome: "Rafael",
    nota: 10,
    turma: '1A'
},{
    nome: "Pedro",
    nota: 8,
    turma: '1B'
},{
    nome: "Thiago",
    nota: 7,
    turma: '1C'
},{
    nome: "Mateus",
    nota: 5,
    turma: '1D'
},]

function calculaMedia(alunos, media){
    let alunosPassaram = [];
    for(aluno of alunos){
        const {nota, nome} = aluno;
        if(nota >= media){
            alunosPassaram.push(nome);
        }
    }

    return alunosPassaram;
}

console.log(calculaMedia(alunos, 7));
console.log(calculaMedia(alunos, 8));

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Rafael",
    idade: 32
}

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa1, [10]));


// IF ELSE

function testIfElse(num){
    if(!num){
        console.log("Favor informar um número");
        return;
    }
    if(num >= 0){
        console.log("Positivo");
    }else{
        console.log("Negativo");
    }
}

testIfElse();
testIfElse(-1);
testIfElse(1);

// BIND; APPLY; CALL

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

// MAP

// MAIS FACIL BUSCAR ELEMENTOS EM UM MAP DO QUE EM UM OBJETO; DESCOBRIR O TAMANHO; ENTRE OUTROS METODOS DISPONIVEIS

const myMap = new Map()

myMap.set('apple', 'fruit');
//Map(1) {"apple" => "fruit"}

myMap.get(apple);
// "fruit"

myMap.delete("apple");
// true

myMap.get("apple")
// undefined

// NUMBER

let num = 100;

100 + 3
100 / 5
num / 3

num * 5
num % 2
num2 = 101
num2 %2
typeof Math

Math.PI

let fiveByThree = 5 / 3

Math.floor(fiveByThree) // arrendonda pra baixo

Math.ceil(fiveByThree) // arredonda pra cima

let percent = '10%'

let numero = 5

typeof numero

numero.toString()

// OBJECT DESTRUCTURING

// QUANDO PASSAR O OBJETO, PODE USAR SÓ O QUE VOCE PRECISAR

const user = {
    id: 42,
    displayName: 'Rafael',
    fullName: {
        firstName: 'Rafael',
        lastName: 'Bertoni'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userId(user))

console.log(getFullName(user))

// OBJETOS

let obj = {}

typeof obj

obj.name = "julia"

obj.age = 20

Object.values(obj) // valores do objeto (julia, 20)

Object.keys(obj) // As chaves (name, age)

let person = {name: "Julia", age: 20, adress: "Rua 2"}

person.name 

person["name"]

person["numberOfSiblings"] = 3

let mom = "nameOfMom"

person[mom] = "Maria"

person.mom = "marta"

// PALINDROMO

function ehPalindromo(palavra){
    if(!palavra) return "string inexistente";
    let quantidade = palavra.length / 2;
    for(let i = 0; i < quantidade; i++){
        if(palavra[i] !== palavra[palavra.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(ehPalindromo("rafael"));

function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

console.log(verificaPalindromo("Rafael"));

let myVar;

console.log(verificaPalindromo(myVar));

myVar = null;

console.log(verificaPalindromo(myVar));


// SET

// O SET ARMAZENAM APENAS VALORES UNICOS; DIFERENTE DOS ARRAYS

const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet = new Set(myArray);

console.log(mySet);

mySet.add(1);
mySet.add(5);
mySet.has(1);
mySet.has(3);
mySet.delete(5);

// SINTAXE OPERADORES

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

// STRING

nome
nome[1]
nome.length
concatenado
concatenado = nome + " " + sobrenome
concatenado = nome + "\n" + sobrenome
concatenado = nome + "\n\n" + sobrenome
concatenado = nome + '\n\n' + sobrenome
concatenado = `${nome} ${sobrenome}`
concatenado = `${nome} ${sobrenome}`
concatenado = "\""
let frase = "Ola, tudo bem?"
frase.split(" ")
frase.includes("tudo")
frase.startsWith("O")
frase.endsWith("?")
frase.replace(",","!")
let stringModificada = frase.replace(",","!")

// SWITCH

function getAnimal(id){
    if(typeof id !== "number") return "Favor informar um número";
    switch(id){
        case 1:
            return "cao";
        case 2: 
            return "gato";
        case 3: 
            return "passaro";
        default:
            return "peixe";
    }
}

console.log(getAnimal(1));
console.log(getAnimal(4));
console.log(getAnimal("1"));

// THIS

const pessoa3 = {
    firstName: "Andre",
    lastName: "Lamarca",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

console.log(pessoa3.fullName());

console.log(pessoa3.getId());


/*
    THIS EM UM METODO DE UM OBJETO, O THIS É O OBJETO

    SOZINHA É O OBJETO GLOBAL (NAVEGADOR É O WINDOW)

    NA FUNCAO É O OBJETO GLOBAL

    NO EVENTO  É O ELEMENTO QUE RECEBEU O EVENTO

*/

// VALORES DEFAULT

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

// WHILE

function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()

function exemploDoWhile(){
    let num = 6;

    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploDoWhile()