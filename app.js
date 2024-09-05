function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let resultados = '';

    for (let dado of dados) {
    resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">
                    ${dado.modelo}
                </a>              
            </h2>
            <p class="descricao-meta">${dado.fabricacao}</p>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
        </div>
        `
    }

    section.innerHTML = resultados;
}





