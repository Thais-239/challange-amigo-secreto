

let listaParticipantes = [];


function adicionarAmigo(){
let nome = document.getElementById("amigo").value;
if (nome === "") {
alert("Por favor, insira um nome.");
return;
}
listaParticipantes.push(nome);
document.getElementById("amigo").value = "";
atualizarLista()

}

function sortearAmigo(){
    if (listaParticipantes.length <= 0) {
        alert("Adicione participantes antes de sortear.");
        return;

    }
    let amigoSecreto = Math.floor(Math.random() * listaParticipantes.length);
    let nomeSorteado = listaParticipantes[amigoSecreto];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto é: ${nomeSorteado}`;
}
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < listaParticipantes.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaParticipantes[i]; 
        listaAmigos.appendChild(li);
        

    }
}
