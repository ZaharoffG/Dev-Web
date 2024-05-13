let dados;

const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';
divPesquisa.style.padding = '.5rem';

const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';

divPesquisa.appendChild(inputPesquisa);
document.body.appendChild(divPesquisa);


const container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.gap = '.5rem';

const montaCard = (entrada) => {
    const card = document.createElement('div');
    card.style.cssText = `
        border: solid 2px;
        border-color: black;
        padding: .3rem;
        width: 30rem;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: 
        "i p "
        "i n "
        "d d "
        "b b ";
    `

    const divImagem = document.createElement('div');
    divImagem.className = 'imagem';
    divImagem.style.display = 'flex';
    divImagem.style.justifyContent = 'center';
    divImagem.style.alignItems = 'center';
    divImagem.style.gridArea = 'i';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;

    imagem.style.objectFit = 'cover';
    imagem.style.objectPosition = '20% 20%';
    imagem.style.width = '7rem';
    imagem.style.height = '7rem';
    imagem.style.borderRadius = '50%';


    const pPosicao = document.createElement('p');
    pPosicao.className = 'posicao';
    pPosicao.innerHTML = entrada.posicao;

    pPosicao.style.display = 'flex';
    pPosicao.style.textTransform = 'uppercase';
    pPosicao.style.alignItems = 'center';
    pPosicao.style.justifyContent = 'center';
    pPosicao.style.gridArea = 'p';


    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.innerHTML = entrada.nome;

    pNome.style.display = 'flex';
    pNome.style.textTransform = 'capitalize';
    pNome.style.alignItems = 'center';
    pNome.style.justifyContent = 'center';
    pNome.style.gridArea = 'n';


    const pDescricao = document.createElement('p');
    pDescricao.className = 'descricao';
    pDescricao.innerHTML = entrada.descricao;

    pDescricao.style.display = 'flex';
    pDescricao.style.justifyContent = 'center';
    pDescricao.style.alignItems = 'center';
    pDescricao.style.textAlign = 'center';
    pDescricao.style.gridArea = 'd';


    const pNascimento = document.createElement('p');
    pNascimento.className = 'nascimento';
    pNascimento.innerHTML = entrada.nascimento;

    pNascimento.style.display = 'flex';
    pNascimento.style.textAlign = 'center';
    pNascimento.style.alignItems = 'center';
    pNascimento.style.justifyContent = 'center';
    pNascimento.style.gridArea = 'b';


    card.appendChild(divImagem);
    divImagem.appendChild(imagem);
    card.appendChild(pPosicao);
    card.appendChild(pNome);
    card.appendChild(pDescricao);
    card.appendChild(pNascimento);

    return card;
}

const pegaDados = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pegaDados("https://botafogo-atletas.mange.li/feminino").then(
    (entrada) => {
        dados = entrada;
        entrada.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta))
            }
        )
    },
    (erro) => console.log(erro) 
)




inputPesquisa.onkeyup = ( ev ) => {
    if (ev.target.value.length >= 2 || ev.target.value.length == 0){
        const filtrado = dados.filter(
            (ele) => {
                const pos = ele.posicao.toLowerCase().includes(ev.target.value.toLowerCase())
                const nom = ele.nome.toLowerCase().includes(ev.target.value.toLowerCase())
                return pos || nom
            }
        )
    
        container.innerHTML = '';
    
        filtrado.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta))
            }
        )
    }
}


