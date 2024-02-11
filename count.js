let sum = 0;
const firstElement = document.getElementById("count");
function clickMe() {
  sum += 1;
  firstElement.innerText = sum;
}

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function () {
  sum -= 1;
  firstElement.innerText = sum;
});
