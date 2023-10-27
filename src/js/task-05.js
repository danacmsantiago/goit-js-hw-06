const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const outputElContent = outputEl.textContent;

inputEl.addEventListener("input", handleInput);

// function declaration only so you can use the variable before declaring it (hoisting)

function handleInput(event) {
  let inputValidation =
    event.currentTarget.value.trim() > ""
      ? (outputEl.textContent = event.currentTarget.value)
      : (outputEl.textContent = outputElContent);

  return inputValidation;
}
