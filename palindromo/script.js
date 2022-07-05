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
