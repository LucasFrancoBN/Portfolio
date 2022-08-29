export default function initTabNav() {
  const tabItens = document.querySelectorAll("[data-tabNav='item']");
  const sections = document.querySelectorAll("[data-tabNav='section']");

  if (tabItens.length && sections.length) {
    sections[0].classList.add("ativo");
    tabItens[0].classList.add("ativo");
    function activeTabNav(index) {
      sections.forEach((section) => section.classList.remove("ativo"));
      sections[index].classList.add("ativo");

      tabItens.forEach((item) => item.classList.remove("ativo"));
      tabItens[index].classList.add("ativo");
    }

    tabItens.forEach((item, index) =>
      item.addEventListener("click", () => {
        activeTabNav(index);
      })
    );
  }
}
