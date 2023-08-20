// esse é um cometário em linha
// outro
/* 
O que precisamos fazer?
Quando passar o mouse em cima do personagem na lista temos 
que adicionar a borda azul de seleção na 
imagem pequena do personagem e mostrar a imagem,
o nome e o texto grande do personagem que está selecionado.

OBJETIVO 1- quando passar o mouse em cima do 
personagem na listagem, devemos selecionár-lo.

passo 1 - pegar os personagens no JS pra poder verificar
quando  o usuário passar o mouse em cima de um deles.

passo 2- adicionar a classe selecionadao no personagem
que o usuário passar o cursor do mouse.

passo 3 - verificar se já exita um personagem
selecionado, se sim, devemos remover a seleção dele.

OBJETIVO 2. quando passar o mouse em cima do personagem
na listagem, trocar a imagem, o nome e a descrição 
do presonagem grande.
passo1. pegar o elemento do personagem grande
pra adicionas as informações nele.
passo2. alterar a imagem do personagem grande
passo3. aolterar o nome do personagem grande
passe4. alterar a descrição do personagem grande.

*/

/*OBJETIVO 1 - quando passsar o mouse em cima do 
personagem na listagem, devemos selecioná-lo 

passo 1. pegar os personagens no JS pra
poder verificar quando o usuário passar o mouse
em cima de um deles.*/



// criando variavel
/*

document.getElementById("ciclope");
const itemCiclope = document.getElementById("ciclope");

console.log(itemCiclope);

const itemJeanGrey = document.getElementById("jean-grey")
*/

// fazendo um método mais facil

//busca por todos seletores.

//quando colocamos ponto, quer dizer que queremos
//buscar todos os elementos que tem essa classe ALl personagem
//class="personagem"


const personagens =  document.querySelectorAll('.personagem');


//passo 2- adicionar a classe selecionadao no personagem
//que o usuário passar o cursor do mouse.


personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    // pra acessar no celular
    if(window.innerWidth < 450){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
 


//passo 3 - verificar se já exita um personagem
//selecionado, se sim, devemos remover a seleção dele.
  removerSelecaoDoPersonagem(); //clicar em cima da função e apertar f12
//realizado Refactoração
personagem.classList.add('selecionado');

/*OBJETIVO 2. quando passar o mouse em cima do personagem
na listagem, trocar a imagem, o nome e a descrição 
do presonagem grande.
*/

//passo1. pegar o elemento do personagem grande
//pra adicionas as informações nele.

const imagemPersonagemGrande = document.querySelector('.personagem-grande');

//passo2. alterar a imagem do personagem grande
const idPersonagem = personagem.attributes.id.value;
//usar Template String unir um texto com outro texto.  Interpolação
//de textos. 
imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

//passo3. aolterar o nome do personagem grande

const nomePersonagem = document.getElementById('nome-personagem');
nomePersonagem.innerText = personagem.getAttribute('data-name');

//passe4. alterar a descrição do personagem grande.

const descricaoPersonagem = document.getElementById('descricao-personagem');
descricaoPersonagem.innerText = personagem.getAttribute('data-description');


})
})






function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');

  personagemSelecionado.classList.remove('selecionado');
}

