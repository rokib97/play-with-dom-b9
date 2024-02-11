let serialCount = 1;

document.getElementById("submit-btn").addEventListener("click", function () {
  //   const inputElemet = document.querySelector("textarea");
  //   const inputValue = inputElemet.value;
  const inputValue = document.querySelector("textarea").value;
  console.log(inputValue);
  const container = document.getElementById("review");
  const p = document.createElement("p");
  p.innerText = serialCount + ". " + inputValue;
  container.appendChild(p);
  serialCount++;
  document.querySelector("textarea").value = "";
});

document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const inputValue = document.querySelector("textarea").value;
      console.log(inputValue);
      const container = document.getElementById("review");
      const p = document.createElement("p");
      p.innerText = serialCount + ". " + inputValue;
      container.appendChild(p);
      serialCount++;
      document.querySelector("textarea").value = "";
    }
  });
