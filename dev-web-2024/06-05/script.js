console.log("Usando o forEach", "\n------------------------------------")

dados.forEach(elemento => {
    console.log(elemento.nome);
    }
);

console.log("Usando while", "\n------------------------------------")
let n = 0;
while(n < dados.length){
    console.log("A posição de", dados[n].nome, dados[n].posicao);
    n++;
}

console.log("Usando for", "\n------------------------------------")
for(let i = 0; i < dados.length; i++){
    console.log("A altura de", dados[i].nome, dados[i].altura);
}

console.log("Usando for...of", "\n------------------------------------")
for(const element of dados){
    console.log(element.nome_completo);
}


const a = document.getElementById("conteudo")

dados.forEach(
    (atleta) => {
        a.innerHTML += 
        `
        <div class='card'>
            <div class='imagem'>
                <img id='foto' src=${atleta.imagem} alt = 'foto de ${atleta.nome}' >
            </div>
            <p id='posicao'>${atleta.posicao}</p>
            <p id='nome'>${atleta.nome_completo}</p>
            <p id='descricao'>${atleta.descricao}</p>
            <p id='nascimento'>${atleta.nascimento}</p>
        </div>
    `
    }
)

a.innerHTML = `
    <div class='card'>
        <div class='imagem'>
            <img id='foto' src=${atleta.imagem} alt = 'foto de ${atleta.nome}' >
        </div>
        <p id='posicao'>${atleta.posicao}</p>
        <p id='nome'>${atleta.nome_completo}</p>
        <p id='descricao'>${atleta.descricao}</p>
        <p id='nascimento'>${atleta.nascimento}</p>
    </div>
`