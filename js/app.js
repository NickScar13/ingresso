//função comprar
function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;
    let qtdDisponivel = document.getElementById(`qtd-${ingresso}`).textContent;
    valorSubtraido = qtdDisponivel - qtd;
    //verificação da validade da quantidade de ingressos selecionada
    if (qtd == '' || valorSubtraido<0) {
        alert('Informe uma quantidade válida e que ainda esteja disponivel!');
        return;
    } else {
        alert (`Você selecionou ${qtd} ingresso(s) do tipo ${ingresso}.`);
    }
    //subtrair da quantidade selecionada do total de ingressos
    document.getElementById(`qtd-${ingresso}`).innerHTML = valorSubtraido;
    alert (`Restam ${valorSubtraido} ingresso(s) do tipo ${ingresso}.`);
}
