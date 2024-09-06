function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    const section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa, remove espaços em branco e converte para minúsculas
    const termoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
  
    // Verifica se o usuário digitou algum termo de pesquisa
    if (!termoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Digite sua Pesquisa!</p>";
      return;
    }
  
    // Inicializa uma string para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado e verifica se contém o termo de pesquisa
    for (const dado of dados) {
      // Converte os dados para minúsculas para comparação case-insensitive
      const { titulo, descricao, tags } = dado;
      const tituloMinusculo = titulo.toLowerCase();
      const descricaoMinusculo = descricao.toLowerCase();
      const tagsMinusculo = tags.toLowerCase();
  
      if (tituloMinusculo.includes(termoPesquisa) || descricaoMinusculo.includes(termoPesquisa) || tagsMinusculo.includes(termoPesquisa)) {
        // Adiciona o resultado à string de resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${titulo}</a>
            </h2>
            <p class="descricao-meta">${descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Exibe os resultados na seção HTML ou uma mensagem caso não haja resultados
    section.innerHTML = resultados || "<p>Nada foi encontrado</p>";
};