export default function outsideClick(element, userEvent, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener(userEvent, handleOutsideClick);
      callback();
    }
  }
}
