function ehPalindromo(palavra){
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
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

console.log(verificaPalindromo("Rafael"));