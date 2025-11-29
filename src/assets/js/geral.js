const animeScroll = () => {
  const item = document.querySelectorAll("[data-anime]");
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

// Executa após o carregamento inicial e sempre que ocorrer rolagem
window.addEventListener("scroll", animeScroll);
window.addEventListener("DOMContentLoaded", animeScroll);
window.addEventListener("load", animeScroll);

// Observa mudanças no DOM (Angular injeta conteúdo após bootstrap)
try {
  const observer = new MutationObserver(() => animeScroll());
  observer.observe(document.documentElement, { childList: true, subtree: true });
  // Para evitar custo contínuo, interrompe após primeira aplicação bem-sucedida
  setTimeout(() => observer.disconnect(), 3000);
} catch (e) {
  // Silencia em ambientes sem suporte
}
