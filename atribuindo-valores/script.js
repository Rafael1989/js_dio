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
