
// get local data
let books = JSON.parse(localStorage.getItem("books")) || [];

// get element
const showCard = document.querySelector(".content");
const btnAddBook = document.querySelector("#addBook");
const addForm = document.querySelector("#addForm");

// add books
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = new Date().valueOf();
  const title = document.querySelector("#inputTitle").value;
  const author = document.querySelector("#inputAuthor").value;
  const year = document.querySelector("#inputYear").value;
  const isComplete = document.querySelector("#inputIsComplete").checked;
  books.unshift({ id, title, author, year, isComplete });
  saveLocalStorage(books)
  showData();
});

// btn show add books (mobile)
btnAddBook.addEventListener("click", () => {
  document.querySelector("aside").classList.toggle("hidden");
  btnAddBook.classList.toggle("rotate");
});

// btn finish, edit delete
function setButtonOption() {
  const optionBtn = document.querySelectorAll(".optionBtn");
  optionBtn.forEach((cardBtn) => {
    cardBtn.addEventListener("click", (e) => {
      const id = parseInt(e.target.parentElement.id);
      const btnClick = e.target.id;

      if (btnClick === "btnFinish") {
        books = books.map( book => {
          if (book.id === id) {
            return {...book, isComplete: !book.isComplete }
          }
          return book
        })
      } else if (btnClick === "btnEdit") {
        console.log("edit", id);
      }else if (btnClick === "btnDelete") {
        books = books.filter( book => book.id !== id )
      }

      
      saveLocalStorage(books)
      showData()
    });
  });
}

// save to local storage
function saveLocalStorage(data) {
  localStorage.setItem("books", JSON.stringify(data));
}

// show data
function showData(filterBook, shelf) {
  const data = books.map((book) => {
    const { id, title, author, year, isComplete } = book;
    const headerSatus = isComplete ? "Done reading" : "Not finished reading";
    const headerBtn = isComplete ? "Not finished reading" : "Done reading";
    return `
        <div class="card-wrapper shadowMd">
          <div class="cardHead">
            <span class="complete${isComplete}"> ${headerSatus}</span>
          </div>
          <div class="cardBody">
            <h3>${title}</h3>
            <p>author: ${author}</p>
            <p>year: ${year}</p>
            <div class="optionBtn" id="${id}">
              <span id="btnFinish" class="btnFinish" >${headerBtn}</span>
              <span id="btnEdit" class="btnFinish" >Edit</span>
              <span id="btnDelete" class="btnDelete" >Delete</span>
            </div>
          </div>
        </div>
        `;
  });

  showCard.innerHTML = data.join(" ");
  setButtonOption();
}

showData();
