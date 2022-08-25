import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {}

const menuButton = document.querySelector("[data-menu='button']");
const menuList = document.querySelector("[data-menu='list']");
const events = ["click", "touchstart"];

function handleClick() {
  menuButton.classList.add("ativo");
  menuList.classList.add("ativo");
  console.log(menuButton, menuList);
  outsideClick(menuList, events, () => {
    menuButton.classList.remove("ativo");
    menuList.classList.remove("ativo");
  });
}

events.forEach((userEvent) =>
  menuButton.addEventListener(userEvent, handleClick)
);
