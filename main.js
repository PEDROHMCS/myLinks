let switcher = document.querySelector("#switch")
let body = document.body

switcher.addEventListener("click", () => {
  body.classList.toggle("light")
})
