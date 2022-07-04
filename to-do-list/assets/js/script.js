var tarefaElement = document.getElementById("tarefa");
var tarefa = null;
if(tarefaElement != null){
    tarefa = tarefaElement.value;
}

var count = 0;

function adicionar(){
    var tarefa = document.getElementById("tarefa").value;
    document.getElementById('lista').innerHTML += '<div><input type="checkbox" id="'+tarefa+count+'" onchange="handleChange(event)"><span id="'+'span'+tarefa+count+'">'+tarefa+'</span></div>';
    count++;
}

function handleChange(e) {
    if(e.target.checked){
        document.getElementById('span'+e.target.id).style.textDecoration = 'line-through';
    }else{
        document.getElementById('span'+e.target.id).style.textDecoration = 'none';
    }
}