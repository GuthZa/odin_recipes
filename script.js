const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red";

const headThree = document.createElement("h3");
headThree.style.color = "blue";
headThree.textContent = "I'm blue h3!";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!";

document.body.appendChild(para);
document.body.appendChild(headThree);
div.appendChild(h1);
div.appendChild(paraTwo);
document.body.appendChild(div);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
