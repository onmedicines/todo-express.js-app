const textarea = document.querySelector("#post");

textarea.addEventListener("input", (event) => {
  event.target.style.height = event.target.scrollHeight + "px";
});
textarea.addEventListener("keydown", (event) => {
  event.target.style.height = event.target.scrollHeight + "px";
});
