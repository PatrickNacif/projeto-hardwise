//RECUPERAR O ID DETALHE DO LOCALSTORAGE

var id = parseInt(localStorage.getItem('detalhe'));

//PEGAR OS PRODUTOS DO LOCAL STORAGE

var jogos = JSON.parse(localStorage.getItem('jogos'));

var jogo = jogos.find(jogos => jogos.id === id);

if (jogo){
    //TEM O ITEM
    console.log('Produto encontrado: ',jogo);

    //ALIMENTAR COM OS VALORES DO ITEM
    $("#imagem-detalhe").attr('src',jogo.imagem);
    $("#nome-detalhe").html(jogo.nome);
    $("#descricao-detalhe").html(jogo.descricao);

}
else {
    //NAO TEM O ITEM
    console.log('Produto não encontrado');
}

