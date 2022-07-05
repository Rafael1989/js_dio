const pessoa = {
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

console.log(pessoa.fullName());

console.log(pessoa.getId());


/*
    THIS EM UM METODO DE UM OBJETO, O THIS É O OBJETO

    SOZINHA É O OBJETO GLOBAL (NAVEGADOR É O WINDOW)

    NA FUNCAO É O OBJETO GLOBAL

    NO EVENTO  É O ELEMENTO QUE RECEBEU O EVENTO

*/