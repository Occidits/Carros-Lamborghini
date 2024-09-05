function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let resultados = '';

    for (let dado of dados) {
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

    section.innerHTML = resultados;
}





