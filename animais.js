// Filtra os cards conforme os três campos selecionados.
const filtroClasse = document.querySelector("#filtro-classe");
const filtroAlimentacao = document.querySelector("#filtro-alimentacao");
const filtroBioma = document.querySelector("#filtro-bioma");
const botaoLimpar = document.querySelector("#limpar-filtros");
const cardsAnimais = document.querySelectorAll(".animal-card");
const contadorAnimais = document.querySelector("#contador-animais");
const semResultados = document.querySelector("#sem-resultados");

function filtrarAnimais() {
  const classeEscolhida = filtroClasse.value;
  const alimentacaoEscolhida = filtroAlimentacao.value;
  const biomaEscolhido = filtroBioma.value;
  let quantidadeVisivel = 0;

  cardsAnimais.forEach((card) => {
    const correspondeClasse = classeEscolhida === "todos" || card.dataset.classe === classeEscolhida;
    const correspondeAlimentacao = alimentacaoEscolhida === "todos" || card.dataset.alimentacao === alimentacaoEscolhida;
    const biomasDoAnimal = card.dataset.biomas.split(" ");
    const correspondeBioma = biomaEscolhido === "todos" || biomasDoAnimal.includes(biomaEscolhido);
    const deveMostrar = correspondeClasse && correspondeAlimentacao && correspondeBioma;

    card.hidden = !deveMostrar;
    if (deveMostrar) quantidadeVisivel++;
  });

  contadorAnimais.textContent = `${quantidadeVisivel} ${quantidadeVisivel === 1 ? "animal encontrado" : "animais encontrados"}.`;
  semResultados.hidden = quantidadeVisivel !== 0;
}

[filtroClasse, filtroAlimentacao, filtroBioma].forEach((filtro) => {
  filtro.addEventListener("change", filtrarAnimais);
});

botaoLimpar.addEventListener("click", () => {
  filtroClasse.value = "todos";
  filtroAlimentacao.value = "todos";
  filtroBioma.value = "todos";
  filtrarAnimais();
});
