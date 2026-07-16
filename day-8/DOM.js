// 1. Forms
// => A form collects user input. Use addEventListener to handle submit.
// => We use event.preventDefault() to stop the page from refreshing.

// HTML: <form id="myForm"><input id="name" /><button>Submit</button></form>

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = document.getElementById("name").value;
  console.log("Name entered:", value);
});


// 2. Form Validation
// => Validation checks if user input is correct before using it.

const input = document.getElementById("email");

if (input.value === "") {
  console.log("Email is empty!");
} else if (!input.value.includes("@")) {
  console.log("Not a valid email!");
} else {
  console.log("Email is valid:", input.value);
}


// 3. `localStorage`
// => Stores data in the browser. Data stays even after closing the browser.

localStorage.setItem("username", "Srijon");       // Save
const name = localStorage.getItem("username");     // Read "Srijon"
localStorage.removeItem("username");               // Delete


// 4. `sessionStorage`
// => Same as localStorage but data is cleared when the tab is closed.

sessionStorage.setItem("page", "home");            // Save
const page = sessionStorage.getItem("page");       // Read "home"
sessionStorage.removeItem("page");                 // Delete


// 5. Browser Storage
// => localStorage: data stays until manually deleted
// => sessionStorage: data clears when tab is closed
// => Both use the same methods: setItem / getItem / removeItem

// JSON.stringify() used to convert json object to a string
const user = { name: "Srijon", age: 21 };
localStorage.setItem("user", JSON.stringify(user));         // Save object
const stored = JSON.parse(localStorage.getItem("user"));    // Read object
console.log(stored.name); // "Srijon"