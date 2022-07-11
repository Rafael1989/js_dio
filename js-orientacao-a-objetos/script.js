class ContaBancaria{

    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor < 0 || valor > this._saldo){
            return "Operacao negada";
        }
        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor){
        if(valor > 0)
        this._saldo += valor;
    }
}

class ContaUniversitaria extends ContaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor < 500){
            this.saldo -= valor;
        }else{
            return "Operacao negada!"
        }
    }
}

class ContaPoupanca extends ContaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }

}

class ContaCorrente extends ContaBancaria{

    constructor(agencia, numero, _cartaoCredito){
        super(agencia, numero);
        this.tipo = 'conta corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito;
    }
}

const minhaConta = new ContaCorrente(1,234, true);
console.log(minhaConta.saldo);
minhaConta.depositar(1000);
minhaConta.sacar(500);
console.log(minhaConta.saldo);
console.log(minhaConta.sacar(600));

const contaPoupanca = new ContaPoupanca(1,22);
const contaUniversitaria = new ContaUniversitaria(1,22);

contaUniversitaria.depositar(1000);
console.log(contaUniversitaria.sacar(550));
