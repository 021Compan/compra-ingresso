function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista (qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)

    if (qtd > qtdPista){
        alert ('quantidade indisponivel!');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById ('qtd-pista').textContent= qtdPista;
        alert ('compra realizada');
    }if (tipo.value == 'pista'){
        comprarPista(qtd);
    }
}

function comprarSuperior (qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent)

    if (qtd > qtdSuperior){
        alert ('quantidade indisponivel!');
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById ('qtd-superior').textContent = qtdSuperior;
        alert ('compra realizada');
    }if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    }
}

function comprarInferior (qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent)

    if (qtd > qtdInferior){
        alert ('quantidade indisponivel!');
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById ('qtd-inferior').textContent = qtdinferior;
        alert ('compra realizada');
    }if (tipo.value == 'inferior'){
        comprarInferior(qtd);
    }
}