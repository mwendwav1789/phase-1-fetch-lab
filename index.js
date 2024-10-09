function fetchBooks() {
  // Ensure we return the fetch call
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      // Check if the response is okay, if not, throw an error
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Convert the response to JSON
    })
    .then((data) => renderBooks(data)) // Pass the JSON data to renderBooks
    .catch((error) => console.error("Fetch error:", error)); // Log any errors to the console
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Ensure fetchBooks is called once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
