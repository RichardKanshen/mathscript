const input = document.querySelector("input#mathscriptuserinput");
const output = document.querySelector("mathcontainer>math");

input.addEventListener("input", (event) => {
    // This function will be called whenever the input event occurs
    output.innerHTML = event.target.value.MSConvertToHTML(false);
});