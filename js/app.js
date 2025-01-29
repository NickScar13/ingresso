//função comprar
function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    //verificação da validade da quantidade de ingressos selecionada
    if (quantidade == '') {
        alert('Informe uma quantidade válida!');
        return;
    } else {
    alert (`Você selecionou ${quantidade} ingresso(s) do tipo ${ingresso}.`);
    }
    //subtrair da quantidade selecionada do total de ingressos
    let qtdDisponivel = document.getElementById(`qtd-${ingresso}`).textContent;
    valorSubtraido = qtdDisponivel - quantidade;
    document.getElementById(`qtd-${ingresso}`).innerHTML = valorSubtraido;
    alert (`Restam ${valorSubtraido} ingresso(s) do tipo ${ingresso}.`);
}
