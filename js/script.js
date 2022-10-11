const formCreate = document.getElementById("formCreate")
const popUpWrap = document.querySelector(".popup-wrap")


// create books
formCreate.addEventListener('submit', (e) => {
  e.preventDefault()

  const id = new Date().valueOf()
  const title = document.getElementById("formTitle").value
  const author = document.getElementById("formAuthor").value
  const year = document.getElementById("formYear").value
  const isComplete = document.getElementById("isComplete").checked

  popUpWrap.innerHTML = `<div class="popup-swap swipe-show" id="popup-swap"> ${title} added </div>`
})

const searchInput = document.getElementById("search")
const btnFilter = document.getElementById("btnFilter")

// btn filter handler
btnFilter.addEventListener("click", (e) => {
  document.querySelector(".wrap").classList.toggle("btnFilterClick")
})




