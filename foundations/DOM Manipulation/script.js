// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p")
redP.textContent = "“Hey I’m red!”"
redP.setAttribute("style", "color: red;")

const blueHeading = document.createElement("h3")
blueHeading.textContent = "“I'm a blue h3”"
blueHeading.setAttribute("style", "color: blue;")

const newContainer = document.createElement("div")
newContainer.classList.add("newContainer");
newContainer.setAttribute("style", "border: black 1px solid; background-color: pink;")

const inDiv = document.createElement("h1");
inDiv.textContent = "am div"

const alsoInDiv = document.createElement("p");
alsoInDiv.textContent = "am also in div"

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueHeading);

container.appendChild(newContainer);

newContainer.appendChild(inDiv);
newContainer.appendChild(alsoInDiv);
