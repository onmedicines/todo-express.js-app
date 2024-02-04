const textarea = document.querySelector(".post");

textarea.addEventListener("input", (event) => {
  event.target.style.height = event.target.scrollHeight + "px";
});
textarea.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    event.target.style.height = "24px";
    event.target.style.height = event.target.scrollHeight + "px";
  }
});
