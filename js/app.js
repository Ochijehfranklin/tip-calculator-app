
const billInput = document.getElementById("billInput");
const customTip = document.getElementById("tipCustom");
const totalPeople = document.getElementById("totalPeople");
const tipSelector = document.querySelectorAll(".tipPercent");
const tipGiven = document.getElementById("tip-Given");
const totalTip = document.getElementById("totalTip");
const resetBtn = document.getElementById("reset");
const error = document.getElementById("error");

let billValue = 0;
let tipValue = 0;
let peopleValue = 1;
let customTipValue = 0;

// Listen for input on billInput field
billInput.addEventListener("input", (e) => {
  billValue = parseFloat(e.target.value);
  calculateTip();
});

// Listen for input on customTip field
customTip.addEventListener("input", (e) => {
  customTipValue = parseFloat(e.target.value);
  calculateTip();
});

// Listen for input on totalPeople field
totalPeople.addEventListener("input", (e) => {
  peopleValue = e.target.value;
  calculateTip();
});

// Loop through each tip selector to add click event listener
tipSelector.forEach((tip) => {
  tip.addEventListener("click", (e) => {
    tipSelector.forEach((tip) => {
      tip.classList.remove("templateTip");
    });
    tip.classList.add("templateTip");
    tipValue = parseFloat(e.target.innerHTML) / 100;
    calculateTip();
  });
});

// Listen for click on reset button
resetBtn.addEventListener("click", () => {
  billValue = 0;
  tipValue = 0;
  peopleValue = 1;
  customTipValue = 0;
  billInput.value = "";
  customTip.value = "";
  totalPeople.value = "";
  tipGiven.innerText = "$0.00";
  totalTip.innerText = "$0.00";
  tipSelector.forEach((tip) => {
    tip.classList.remove("templateTip");
  });
  error.style.display = "none";
});

function calculateTip() {
  if (billValue > 0 && peopleValue > 0) {
    let tipAmount = 0;
    if (customTipValue > 0) {
      tipAmount = (billValue * customTipValue) / 100;      tipAmount = holder / peopleValue;
      tipValue = customTipValue / 100;
    } else {
      tipAmount = (billValue * tipValue) / peopleValue;
    }
    let totalAmount = (billValue/peopleValue) + tipAmount;
    tipGiven.innerText = "$" + tipAmount.toFixed(2);
    totalTip.innerText = "$" + totalAmount.toFixed(2);
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

