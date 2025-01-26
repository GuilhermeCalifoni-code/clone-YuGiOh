// Seleciona os botões de avançar e voltar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

// Seleciona todos os cartões da lista
const cartoes = document.querySelectorAll(".cartao");

// Variável para controlar qual cartão está atualmente selecionado
let cartaoAtual = 0;

// OBJETIVO 1 - Avançar para o próximo cartão
btnAvancar.addEventListener("click", function () {
  // Verifica se ainda existem cartões para avançar
  if (cartaoAtual < cartoes.length - 1) {
    // Passo 1: Remove a classe "selecionado" do cartão atual
    cartoes[cartaoAtual].classList.remove("selecionado");

    // Passo 2: Atualiza o índice para o próximo cartão
    cartaoAtual++;

    // Passo 3: Adiciona a classe "selecionado" ao próximo cartão
    cartoes[cartaoAtual].classList.add("selecionado");
  }
});

// OBJETIVO 2 - Voltar para o cartão anterior
btnVoltar.addEventListener("click", function () {
  // Verifica se ainda existem cartões para voltar
  if (cartaoAtual > 0) {
    // Passo 1: Remove a classe "selecionado" do cartão atual
    cartoes[cartaoAtual].classList.remove("selecionado");

    // Passo 2: Atualiza o índice para o cartão anterior
    cartaoAtual--;

    // Passo 3: Adiciona a classe "selecionado" ao cartão anterior
    cartoes[cartaoAtual].classList.add("selecionado");
  }
});
