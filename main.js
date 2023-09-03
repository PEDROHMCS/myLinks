let switcher = document.querySelector("#switch")
let body = document.body.classList

switcher.addEventListener("click", () => {
  body.toggle("light")

  !body.contains("light") ? body.add("transToWhite") : body.remove("transToWhite")
  
})
