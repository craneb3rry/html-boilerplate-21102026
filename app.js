console.log("JS loaded");

let headingElement = document.getElementById("header")
console.log(headingElement)


let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", handleClick)

function handleClick() {
    headingElement.remove();
}
