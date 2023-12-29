const input = document.querySelector("input#mathscriptuserinput");
const output = document.querySelector("mathcontainer");

input.addEventListener("input", (event) => {
    // This function will be called whenever the input event occurs
    output.innerHTML = event.target.value.MSConvertToHTML(true);
});