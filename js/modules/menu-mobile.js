import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {}

const menuButton = document.querySelector("[data-menu='button']");
const menuList = document.querySelector("[data-menu='list']");
const userEvent = "click";

function handleClick() {
  menuButton.classList.add("ativo");
  menuList.classList.add("ativo");
  console.log(menuButton, menuList);
  outsideClick(menuList, userEvent, () => {
    menuButton.classList.remove("ativo");
    menuList.classList.remove("ativo");
  });
}
menuButton.addEventListener(userEvent, handleClick);
