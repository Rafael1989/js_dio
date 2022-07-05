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