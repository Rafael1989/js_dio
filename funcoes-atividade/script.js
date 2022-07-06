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

const pessoa = {
    nome: "Rafael",
    idade: 32
}

console.log(calculaIdade.call(pessoa, 10));
console.log(calculaIdade.apply(pessoa, [10]));