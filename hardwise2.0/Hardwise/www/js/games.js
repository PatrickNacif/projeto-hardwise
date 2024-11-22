// pagina games.js

fetch('js/backend.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // SALVAR OS DADOS VINDOS DO BACK-END LOCALMENTE
    // UTILIZAR LOCALSTORAGE
    localStorage.setItem('jogos', JSON.stringify(data));
    console.log('Dados dos produtos salvos no localStorage');

    // SIMULAR CARREGAMENTO ONLINE
    setTimeout(() => {
      // ESVAZIAR A ÁREA DE PRODUTOS
      $("#jogos").empty();

      data.forEach(jogo => {
        var jogoHTML = `
          <div class="jogo-card">
            <a data-id="${jogo.id}" href="#" class="jogo">
              <div class="img-container">
                <img src="${jogo.imagem}" width="120" height="120" alt="${jogo.nome}">
              </div>
              <div class="nome-rating">
                <strong><span>${jogo.nome}</span></strong>
              </div>
            </a>
          </div>
        `;

        $("#jogos").append(jogoHTML);
      });

      // ADICIONAR EVENTO DE CLIQUE PARA OS LINKS DE JOGOS
      $(".jogo").on('click', function (e) {
        e.preventDefault(); // Prevenir comportamento padrão do link
        var id = $(this).attr('data-id');
        localStorage.setItem('detalhe', id);
        // Navegar para a página de detalhes
        app.views.main.router.navigate('/detalhes/');
      });

    }, 1000);

  })
  .catch(error => console.error('Erro ao fazer fetch dos dados: ' + error));
