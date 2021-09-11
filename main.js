function adicionar(){
    let atividade = document.getElementById("atividade").value;
    let listaAtividades  = document.getElementById("listaatividades").innerHTML;
    listaAtividades = listaAtividades + "<li>" + atividade + "<li/>";
    document.getElementById("listaatividades").innerHTML = listaAtividades;
}