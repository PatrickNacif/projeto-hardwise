fetch('js/backend.json')
.then(response => response.json())
.then(data=> {
    //SALVAR OS DADOS VINDOS DO BACKEND LOCALMENTE
    //VAMOS UTILIZAR LOCALSTORAGE
    localStorage.setItem('jogos', JSON.stringify(data));
    console.log('Dados dos produtos salvos no localStorage');

    //ESVAZIAR A ÁREA DE PRODUTOS
    $('#joguinhos').empty();

})
.catch(error => console.error ('Erro ao fazer fetch dos dados: '+error))