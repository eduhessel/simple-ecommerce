let produtos = [];
let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json';
let elementoParaInserirOsProdutos = document.getElementById('produtos__lista');
buscarProdutosDaAPI();

async function buscarProdutosDaAPI() {
    let res = await fetch(endpoint);
    produtos = await res.json();
    exibirProdutos(produtos);
}

function exibirProdutos(listaDeProdutos) {
    console.log(listaDeProdutos);
    listaDeProdutos.forEach(produto => {
        let valorComDesconto = produto.valorComDesconto.toString().replace(".", ",");
        let valorSemDesconto = produto.valorSemDesconto.toFixed(2).replace(".", ",");
        let tipoEntrega = produto.tipoEntrega;

        if (tipoEntrega.length > 0) {
            tipoEntrega = tipoEntrega.charAt(0).toUpperCase() +
                tipoEntrega.slice(1).toLowerCase();
        }

        elementoParaInserirOsProdutos.innerHTML += `
            <li class="produtos__item">
                <div class="produtos__conteudo">
                    <img src="${produto.img}" alt="Imagem celular">
                    <div class="produtos__informacoes">
                        <h3>${produto.nome}</h3>
                        <div class="preco__frete-gratis">
                            <h4><span class="span__preco__frete-gratis">A vista no pix</span>R$ ${valorComDesconto}<s>R$ ${valorSemDesconto}</s></h4>
                            <p><img src="assets/truck-icon.svg" alt="Imagem caminhão"> ${tipoEntrega}</p>
                        </div>
                        <button>Comprar</button>
                    </div>
                </div>
            </li>
        `
    })
};