console.log("Hello, this is the MLS Helper debugger");

const SEARCH_ATTR = "Results - In-Display Full Link Click";
const matches = document.querySelectorAll('[data-mtx-track="' + SEARCH_ATTR + '"]');
for (const element of matches) {
    element.parentNode.append('hello');
}


console.log("Hello, this is the MLS Helper debugger");
