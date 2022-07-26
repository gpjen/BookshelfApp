// [{"id":3657848524,"title":"Harry Potter and the Philosopher's Stone","author":"J.K Rowling","year":1997,"isComplete":false},{"id":128637612,"title":"Minah sang mata-mata NATO","author":"Kiliwuk","year":2022,"isComplete":false},{"id":33356753,"title":"Ajudan jatuh cinta","author":"mihawk","year":2020,"isComplete":true},{"id":128637612,"title":"melirik kardus kosong","author":"anadika","year":2021,"isComplete":false}]

// get local data
let books = JSON.parse(localStorage.getItem("books")) || [];

// element
const showCard = document.querySelector(".content");
const btnAddBook = document.querySelector('#addBook')
const addForm = document.querySelector('#addForm')

//submit event
addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.title)
})

// evenet click add btn on mobile
btnAddBook.addEventListener('click', () => {
    document.querySelector('aside').classList.toggle('hidden')
    btnAddBook.classList.toggle('rotate')
})

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
            <div class="optionBtn">
              <span class="btnFinish">${headerBtn}</span>
              <span class="btnDelete">Delete</span>
            </div>
          </div>
        </div>
        `;
  });

  showCard.innerHTML = data.join(" ");
}

showData();











