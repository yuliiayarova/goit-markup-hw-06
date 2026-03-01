const openBtn = document.querySelector(".js-open-btn");
const closeBtn = document.querySelector(".js-close-btn");
const modal = document.querySelector(".js-modal-overlay");

openBtn.addEventListener("click", onOpenBtnclick);
closeBtn.addEventListener("click", onCloseBtnClick);

function onOpenBtnclick(event) {
  modal.classList.add("is-open");
}

function onCloseBtnClick(event) {
  if (!event.target.closest(".js-close-btn")) return;
  modal.classList.remove("is-open");
}
