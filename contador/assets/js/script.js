var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

var btnSubtrair = document.getElementById('btnSubtrair');
if(btnSubtrair){
    btnSubtrair.addEventListener("click", function() {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if(currentNumber < 0){
            currentNumberWrapper.style.color = 'red';
        }else{
            currentNumberWrapper.style.color = 'black';
        }
    });
}

var btnAdicionar = document.getElementById('btnAdicionar');
if(btnAdicionar){
    btnAdicionar.addEventListener("click", function() {
        if(currentNumber < 10){
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML = currentNumber;
            if(currentNumber < 0){
                currentNumberWrapper.style.color = 'red';
            }else{
                currentNumberWrapper.style.color = 'black';
            }
        }
    });
}