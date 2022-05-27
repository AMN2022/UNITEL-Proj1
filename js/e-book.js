var produtos = [
    {
        imagem ''
        nome:"",
        texto:"",
    }
]

produtos.map(produtos){
    Document.getelementbyId('produtos').innershtml += 
    {
        <div class "produtos">
            <img src="(produto.imagem)">
            <h2>produto.nome</h2>
            <p>produto.texto</p>
            <button>Comprar</button>
        </div>
    }
}
