export default function initAnimaScroll() {
  const articles = document.querySelectorAll("[data-anima-scroll]");
  function animarScroll() {
    articles.forEach((article) => {
      const alturaArticleTopo = article.getBoundingClientRect().top;
      const alturaDoTopo = window.innerHeight * 0.6;
      const verificarAltura = alturaArticleTopo < alturaDoTopo;
      if (verificarAltura) article.classList.add("ativo");
    });
  }
  window.addEventListener("scroll", animarScroll);
}
