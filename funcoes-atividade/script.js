const alunos = [{
    nome: "Rafael",
    media: 10
},{
    nome: "Pedro",
    media: 8
},{
    nome: "Thiago",
    media: 7
},{
    nome: "Mateus",
    media: 5
},]

function calculaMedia(alunos, media){
    let alunosPassaram = [];
    for(aluno of alunos){
        if(getMedia(aluno) >= media){
            alunosPassaram.push(aluno);
        }
    }

    return alunosPassaram;
}

function getNome({nome}){
    return nome;
}

function getMedia({media}){
    return media;
}

console.log(calculaMedia(alunos, 7));
console.log(calculaMedia(alunos, 8));

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa = {
    nome: "Rafael",
    idade: 32
}

console.log(calculaIdade.call(pessoa, 10));