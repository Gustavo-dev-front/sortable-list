const ITEMS = [...document.querySelectorAll(".item")];
const LIST = document.querySelector("#sortable-list");

ITEMS.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

function initSortable(e) {
  const element = document.querySelector(".dragging");
  const otherElements = [...document.querySelectorAll(".item:not(.dragging)")];

  const next = otherElements.find((item) => {
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  LIST.insertBefore(element, next);
}

LIST.addEventListener("dragover", initSortable);
