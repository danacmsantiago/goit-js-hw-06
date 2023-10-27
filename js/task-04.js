let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

function updateCounterValue() {
  counterValueEl.textContent = counterValue;
}

decrementEl.addEventListener("click", () => {
  counterValue--;
  updateCounterValue();
});

incrementEl.addEventListener("click", () => {
  counterValue++;
  updateCounterValue();
});
