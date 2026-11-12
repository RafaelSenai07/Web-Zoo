// Controla o menu de navegação em telas pequenas.
const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

if (botaoMenu && menuPrincipal) {
  function fecharMenu() {
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    menuPrincipal.classList.remove("is-open");
  }

  botaoMenu.addEventListener("click", () => {
    const estaAberto = botaoMenu.getAttribute("aria-expanded") === "true";
    botaoMenu.setAttribute("aria-expanded", String(!estaAberto));
    botaoMenu.setAttribute("aria-label", estaAberto ? "Abrir menu" : "Fechar menu");
    menuPrincipal.classList.toggle("is-open", !estaAberto);
  });

  menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      fecharMenu();
      botaoMenu.focus();
    }
  });

  // Se a tela voltar ao tamanho de computador, o menu fica em seu estado normal.
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) fecharMenu();
  });
}

// Atualiza o ano do rodapé.
const anoAtual = document.querySelector("#ano-atual");
if (anoAtual) anoAtual.textContent = new Date().getFullYear();
