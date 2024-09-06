function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    if (!campoPesquisa){
        return campoPesquisa = 'Nenhum modelo encontrado. Digite um modelo ou ano de fabricação'
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = '';
    let modelo = '';
    let descricao = '';
    let fabricacao = '';

    for (let dado of dados) {
        modelo = dado.modelo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        fabricacao = dado.fabricacao.toString()

        if (modelo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || fabricacao.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
            <div class="texto">
                <h2>
                    <a href="${dado.link}" target="_blank">
                        ${dado.modelo}
                    </a>              
                </h2>
                <p class="descricao-meta">
                    ${dado.fabricacao}
                </p>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
            </div>
            <img src="${dado.imagem}" alt="Imagem do Modelo ${dado.modelo}">
        </div>
        `
        }
    }

    if (!resultados){
        resultados = '<p>Nenhum modelo foi encontrado</p>'
    }

    section.innerHTML = resultados;
}