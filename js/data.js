// create data to localstorage
function saveData(newData) {

  localStorage.setItem("books", JSON.stringify(newData));
}

// get data from localstorage
function getData() {
  const data = JSON.parse(localStorage.getItem("books"));

  if (data === null) {
    saveData([]);
    return [];
  }

  return data;
}

// delte data from localstorage by ID
function deleteData(data, id) {}

// show Books
function showBooks(data) {
  console.log(data);
}

showBooks(JSON.parse(localStorage.getItem("books")))