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