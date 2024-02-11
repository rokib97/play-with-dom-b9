console.log("connected");

// const title = document.getElementById("title");
// title.innerText = "My Js Power";
// title.style.color = "red";
// console.log(title.innerText);

// const title2 = document.querySelector("p");
// title2.textContent = "I m done by selector";
// console.log(title2);

// const items = document.getElementsByClassName("li-items");
// console.log(items.length);

// const myArr = Array.from(items);
// console.log(myArr);

// for (let index = 0; index < items.length; index++) {
//   const element = items[index];
//   element.style.color = "green";
//   element.innerText = "amar khushi";
//   //   console.log(element);
// }

// const items2 = document.getElementsByTagName("li");
// // console.log(items2);

// for (const iterator of items2) {
//   console.log(iterator);
//   iterator.style.fontSize = "40px";
//   iterator.style.backgroundColor = "yellow";
// }

// const items3 = document.querySelectorAll(".li-items");
// console.log(items3);

// const bodyName = document.querySelector("body");
// console.log(bodyName.childNodes);

// const items = document.querySelector("ul");
// console.log(items.children);

// const ul = document.getElementById("li-container");
// console.log(ul.previousElementSibling);

// const ul = document.querySelector("ul");

// document.querySelector("h2").removeAttribute("class");
// document.querySelector("h2").setAttribute("class", "first-heading");

// const artt = document.querySelector("h2").getAttribute("id");
// console.log(artt);

// const ul = document.querySelector("ul");

// const h2 = document.createElement("h2");
// h2.innerText = "Added by Js";
// console.log(h2);

// ul.appendChild(h2);

const h2 = document.querySelector("h2");
console.log(h2);
h2.classList.add("my-class");
h2.classList.add("first", "second");
h2.classList.remove("second");
h2.classList.add("common-class");

// const ul = document.querySelector("ul");
// const second = document.getElementById("second");

// const li = document.createElement("li");
// li.innerText = "Hello";

// ul.insertBefore(li, second);

// const ul = document.querySelector("ul");
// ul.remove();
