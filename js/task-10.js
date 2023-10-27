function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";

  let boxWidth = 30;
  let boxHeight = 30;

  new Array(amount).fill().forEach(() => {
    const box = document.createElement("div");
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);

    boxWidth += 10;
    boxHeight += 10;
  });
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = amountInput.value;
  if (!isNaN(amount)) {
    createBoxes(parseInt(amount));
  }
});

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";
}

document.querySelector("[data-destroy]").addEventListener("click", function () {
  destroyBoxes();
});
