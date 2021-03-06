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


console.log("//ARRAY ==============================================================================");
//ARRAY ==============================================================================


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

console.log("// ARRAY PARAMS==============================================================================")
// ARRAY PARAMS==============================================================================

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

console.log("//ARROW FUNCTION==============================================================================")
//ARROW FUNCTION==============================================================================

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

console.log("//ATRIBUINDO VALORES==============================================================================")
//ATRIBUINDO VALORES==============================================================================

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
let lastName2 = "Souza";

if(firstName === "Joao"){
    let lastName2 = "Rodrigues";
    var firstName = "Pedro";
    lastName2 = "Silva";

    console.log(firstName, lastName2);
}

console.log(firstName, lastName);

console.log("//VARIAVEL==============================================================================")
 //VARIAVEL==============================================================================

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

function soma3(a, b){ // declarar a funcao
    console.log(a+b);
    return a + b;
}

soma3(3, 5); // chamar a funcao

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

console.log("// BOOLEAN==============================================================================")
// BOOLEAN==============================================================================


let validation = 3 === 0

validation = 3 === 3

validation = 3 > 4

validation = 3 > 2

validation = 3 >= 2

validation.toString()

!validation

!true

!false

console.log("// EMPTY; UNDEFINED; NULL==============================================================================")
// EMPTY; UNDEFINED; NULL==============================================================================


typeof abacaxi // undefined

let mamao 

typeof mamao // undefined

!mamao // true (oposto de undefined é true)

let uva = ""

typeof uva // string (Empty or "")

let pera = null

typeof pera // object (null)

!pera // true (oposto de null é true)

console.log("// FOR==============================================================================")
// FOR==============================================================================
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

console.log("// FUNCAO==============================================================================")
// FUNCAO==============================================================================

// funcao anonima
const soma4 = function(a, b){
    return a + b;
}

console.log(soma4(1,2));
console.log(soma4(3,5));

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

const sum2 = (
    function(a,b){
        console.log(a+b);
        return a+b;
    }
)(1,2);

console.log(sum2);

console.log("//callbacks==============================================================================")
//callbacks==============================================================================
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

console.log("//FUNCAO ATIVIDADE==============================================================================")
//FUNCAO ATIVIDADE==============================================================================

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

console.log("// IF ELSE==============================================================================")
// IF ELSE==============================================================================

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

console.log("// BIND; APPLY; CALL==============================================================================")
// BIND; APPLY; CALL==============================================================================

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

function soma6(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma6.call(myObj, 1, 5); // nesse caso vai usar o call para passar um objeto, além dos argumentos

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

function soma7(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma7.apply(myObj, [1,5]); // tambem podemos enviar array

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'}); // vai jogar a funcao já passando o parametro Bruno para a variavel
 
console.log(bruno()); // agora podemos executar a variavel como se fosse a funcao ja com o parametro

console.log("// MAP==============================================================================")
// MAP==============================================================================

// MAIS FACIL BUSCAR ELEMENTOS EM UM MAP DO QUE EM UM OBJETO; DESCOBRIR O TAMANHO; ENTRE OUTROS METODOS DISPONIVEIS

const myMap = new Map()

myMap.set('apple', 'fruit');
//Map(1) {"apple" => "fruit"}

myMap.delete("apple");
// true

myMap.get("apple")
// undefined

console.log("// NUMBER==============================================================================")
// NUMBER==============================================================================

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

console.log("// OBJECT DESTRUCTURING==============================================================================")
// OBJECT DESTRUCTURING==============================================================================

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

console.log("// OBJETOS==============================================================================")
// OBJETOS==============================================================================

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

console.log("// PALINDROMO==============================================================================")
// PALINDROMO==============================================================================

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


console.log("// SET==============================================================================")
// SET==============================================================================

// O SET ARMAZENAM APENAS VALORES UNICOS; DIFERENTE DOS ARRAYS

const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet = new Set(myArray);

console.log(mySet);

mySet.add(1);
mySet.add(5);
mySet.has(1);
mySet.has(3);
mySet.delete(5);

console.log("// SINTAXE OPERADORES==============================================================================")
// SINTAXE OPERADORES==============================================================================

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

console.log("// STRING==============================================================================")
// STRING==============================================================================
let nome = "Rafael"
let sobrenome = ""
nome[1]
nome.length
let concatenado = ""
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

console.log("// SWITCH==============================================================================")
// SWITCH==============================================================================

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

console.log("// THIS==============================================================================")
// THIS==============================================================================

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

console.log("// VALORES DEFAULT==============================================================================")
// VALORES DEFAULT==============================================================================

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

console.log("// WHILE==============================================================================")
// WHILE==============================================================================

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

console.log("//COLECOES ATIVIDADE==============================================================================")
//COLECOES ATIVIDADE==============================================================================


function getAdmins(map){
    for([key, value] of map){
        if(map.get(key) === 'Admin'){
            console.log(key);
        }
    }
}

const map = new Map();
map.set('Rafael', 'Admin')
map.set('Tiago', 'Admin')
map.set('Pedro', 'Admin')
map.set('Lucas', 'User')

getAdmins(map);

const array3 = [30,30,40,5,223,2049,3034,5];

const set = new Set(array3);
console.log(set);

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // usa o spread para retornar um array ao inves de um set
}

console.log(valoresUnicos(array3));

// MÉTODO MAP==============================================================================
console.log("// MÉTODO MAP==============================================================================")

const arrayMetodoMap = [1,2,3,4,5];

const arrayModificado = arrayMetodoMap.map((item) => item * 2); // nao altera o array original, gera um novo array modificado
console.log(arrayMetodoMap);
console.log(arrayModificado);

//usando foreach
const arrayForEach = [1,2,3,4,5];
const arrayModificado2 = [];
arrayForEach.forEach((item) => arrayModificado2.push(item * 2));
console.log(arrayForEach);
console.log(arrayModificado2);


// FILTER==============================================================================
console.log("// FILTER==============================================================================")

const frutas = ['maca fuji', 'maca verde', 'laranja', 'abacaxi'];

const frutasFiltradas = frutas.filter((fruta) => fruta.includes('maca'))

console.log(frutasFiltradas)


// REDUCE==============================================================================
console.log("// REDUCE==============================================================================")

/*const callbackFn = function(accumulator, currentValue, index, array){

}

array.reduce(callbackFn, initialValue);*/


// ATIVIDADE PRATICA MAP; FILTER; REDUCE==============================================================================
console.log("// ATIVIDADE PRATICA MAP; FILTER; REDUCE==============================================================================")

const arrayapmap = [1,2,3,4,5]

const arraymapmap = arrayapmap.map((valor) => valor * 3);

console.log(arraymapmap);

const arrayapmapfilter = arrayapmap.filter((num) => num % 2 === 0)

console.log(arrayapmapfilter);

const sumreduce = arrayapmap.reduce(function(sum, number) {
    const updatedSum = sum + number;
    return updatedSum;
}, 0);

console.log(sumreduce);

const listPrecos = [33.5, 21.5, 13.5, 22, 54.3]
const saldoInicial = 1000

const saldoFinal = listPrecos.reduce(function(saldoDisponivel, preco){
    const saldoFina = saldoDisponivel - preco;
    return saldoFina;
}, saldoInicial);

console.log(saldoFinal);

const maca = {
    value: 2
}

const laranja = {
    value: 3
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums2 = [1,2];

console.log('this -> maca', mapComThis(nums2, maca));

console.log('this -> laranja', mapComThis(nums2, laranja));

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

const nums3 = [2,4,6,8,10];

console.log(mapSemThis(nums3));


function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1,23,55,67,30,2,4]

console.log(filtraPares(meuArray));

function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev})
        console.log({current})
        return prev + current;
    })
}

const arr = [1,2];

console.log(somaNumeros(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada ", index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista))

// ECMAScript Error==============================================================================
console.log("// ECMAScript Error==============================================================================")

// let sum = a + 2 (a ainda nao foi declarado por exemplo)

// DOMException==============================================================================
console.log("// DOMException==============================================================================")

// Talvez alguma string com um caractere invalido, ou vc está colocando um node do html na hierarquia errada

/*
function verificaPalindromo(string){
    if(!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

THROW============================================================

NESSE SEGUNDO CASO USANDO THROW VAI JOGAR NA TELA UNCAUGHT EXCEPTION; NO EXEMPLO ANTERIOR APENAS UMA STRING

function verificaPalindromo(string){
    if(!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');
*/

function tryCatchExemplo(string){
    try{

    }catch(e){
        console.log(e)
        // OU TAMBEM PODEMOS USAR O THROW PARA COLOCAR NAS ESTATISTICAS DO BROWSER
        throw e;
    }finally{
        // SERA SEMPRE EXECUTADO
    }
}

//OBJETO ERROR

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage'; // PODE NOMEAR O ERRO GERADO

MeuErro.stack // VAI INDICAR QUAL ERRO ACONTECEU

//throw MeuErro; ISSO VAI GERAR UMA EXCEPTION COM ESSE ERRO CRIADO

function checkSize(array, size){
    try{
        if(!array) throw new ReferenceError('Favor enviar um array');
        if(!array.length) throw new ReferenceError('Favor enviar um array populado');
        if(!size) throw new ReferenceError('Favor enviar o size do array');
        if(typeof array !== 'object') throw new TypeError('Favor enviar um array, nao outro tipo');
        if(typeof size !== 'number') throw new TypeError('Favor enviar um size, nao outro tipo'); 
        if(array.length !== size) throw new RangeError('Favor enviar um size que corresponda ao tamanho do array'); 
    }catch(e){
        if(e instanceof ReferenceError){
            console.error("ReferenceError :" + e.message + "\n"+ e.stack + "\n" + e.name );
        }else if(e instanceof TypeError){
            console.error("TypeError :" + e.message + "\n"+ e.stack + "\n" + e.name );
        }else if(e instanceof RangeError){
            console.error("RangeError :" + e.message + "\n"+ e.stack + "\n" + e.name );
        }else{
            console.error("ERROR :" + e.message + "\n"+ e.stack + "\n" + e.name );
        }
    }
}


console.log(checkSize(2))
const aasdads = []
console.log(checkSize(aasdads,2))
const aasdads2 = [2,3]
console.log(checkSize(aasdads2))
console.log(checkSize('aasdads2',2))
console.log(checkSize(aasdads2,'2'))
console.log(checkSize(aasdads2,4))

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros");
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object")
        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number")
        if(arr.length !== num) throw new RangeError("Tamanho inválido")

        return arr;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log("Tipo de erro nao esperado: " + e)
        }
    }
    
}

console.log(validaArray())
console.log(validaArray(5,5))
console.log(validaArray([],'5'))
console.log(validaArray([1,2,3,4,5],4))
console.log(validaArray([1,2,3,4,5],5))


// JAVASCRIPT Assincrono==============================================================================
console.log("// JAVASCRIPT Assincrono==============================================================================")

//PROMISES PODEM SER PENDING; FULFILLED OR REJECTED

/*
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log("Resolvida!"));
    }, 2000);
}); 

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));


async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvida");
        }, 3000);
    });

    let result;

    try{
        result = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
    }catch(err){
        result = err.message
    }

    return result;
}


fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

    
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache'
})
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))
*/

// JS ORIENTADO A OBJETOS

/*

TODO OBJETO HERDA DE PROTOTYPE, array herda TODAS PROPRIEDADES DE ARRAY E OBJECT


*/

// JS ORIENTADO A OBJETOS==============================================================================
console.log("// JS ORIENTADO A OBJETOS==============================================================================")

//Antigo que é a forma que realmente acontece
var Meal = function(food){
    this.food = food
}

Meal.prototype.eat = function(){
    return '=)'
}

//Novo
class Meal2 {
    constructor(food){
        this.food = food
    }

    eat(){
        return '=)'
    }
}

class Animal {
    constructor(type = 'animal'){
        this.type = type
    }

    get type(){
        return this._type
    }

    set type(val){
        this._type = val.toUpperCase()
    }

    makeSound(){
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type)

class Cat extends Animal{
    constructor(){
        super('cat')
    }

    makeSound(){
        super.makeSound()
        console.log('Meow!')
    }
}

let b = new Cat()
console.log(b.type)



// JS MODULOS==============================================================================
console.log("// JS MODULOS==============================================================================")

// DIVIDIR EM MODULOS; CADA ARQUIVO TEM A SUA RESPONSABILIDADE
/*
export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
};

export function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
};

function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}

export{
    mostraIdade,
    mostraCidade,
    mostraHobby
}

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
};

function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}

export{
    mostraIdade,
    mostraCidade,
}

export default mostraHobby; // SÓ PODE SER 1 POR ARQUIVO


import {funcao, variavel, classe} from './arquivo.js'

import valorDefault from './arquivo.js' // VAI IMPORTAR O DEFAULT SEM AS CHAVES

import { arquivo as Apelido } from './arquivo.js'; // PODE DAR UM APELIDO

Apelido.metodo();

import * as INFOS from './arquivo.js'; // PODE IMPORTAR TUDO DO ARQUIVO

INFOS.metodoA();

console.log(INFOS.variavel);

<script type="module" src="./main.js"></script>

export const name = 'value'
import {name} from '...'

export default 'value'
import anyName from '...'

export {name as newName}
import {newName} from '...'

export {name1, name2 as newName2}
import {name1 as newName1, newName2} from '...'


*/

// DOM vs BOM==============================================================================
console.log("// DOM vs BOM==============================================================================")

/* 

DOM (DOCUMENT OBJECT MODEL)
DOM COMECA COM O DOCUMENT E DENTRO DELE VC TEM O ROOT (HTML) E DEPOIS O (HEAD) E O (BODY) E DEPOIS OS ELEMENTOS DENTRO DE BODY

BOM (BROWSER OBJECT MODEL)
JÁ O BOM VC TEM O WINDOW E DENTRO DELE VC TEM DOCUMENT; HISTORY(HISTORICO); LOCATION(LOCALIZACAO); SCREEN(TELA); NAVIGATOR(NAVEGACOES)

document.getElementById('titulo'); 1
document.getElementsByTagName('li'); 1 array
document.getElementsByClassName('textos'); 1 array
document.querySelectorAll('.primeria-classe .segunda-classe') 1 array
document.querySelectorAll('li .opcao') 1 array

document.createElement(element);
document.removeChild(element);
document.appendChild(element);
document.replaceChild(nova, velha);

const meuElemento = document.getElementById('meu-elemento');

meuElemento.classList.add("novo-estilo");
meuElemento.classList.remove("classe");
meuElemento.classList.toggle("dark-mode");
document.getElementsByTagName("p").style.color = "blue";

mouseover, mouseout, click, dbclick, change, load,

const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);

<h1 onclick="mudaTexto(this)">Clique Aqui</h1>
*/











