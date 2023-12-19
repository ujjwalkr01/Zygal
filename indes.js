let inpt = document.getElementById("inpt");
let btn = document.getElementById("btn");
let parentDiv = document.getElementById("parentDiv");

btn.addEventListener("click", () => {
  let width = 100;
  let height = 100;
  parentDiv.innerHTML = "";

  let widthVal = width / inpt.value;
  let heightVal = height / inpt.value;
 
  creating2dMatrix()
});

function creating2dMatrix() {
  for (let i = 1; i <= inpt.value; i++) {
    createParentDiv(i, heightVal);
    for (let j = 1; j <= inpt.value; j++) {
      if (j == inpt.value - i + 1) {
        createChildDiv(i, widthVal, "black");
      } else {
        createChildDiv(i, widthVal);
      }
    }
    console.log("i", i);
  }
}

function createParentDiv(indx, height) {
  let div = document.createElement("div");
  div.setAttribute("id", `parentDIV${indx}`);
  div.style.width = `${100}%`;
  div.style.height = `${height}% `;
  parentDiv.append(div);
}

function createChildDiv(indx, width, color = "white") {
  let div = document.createElement("div");
  //   div.style.border = "2px solid red";
  div.style.width = `${width}%`;
  div.style.height = `${100}% `;
  div.style.display = "inline-block";
  div.style.backgroundColor = `${color}`;
  let parent = document.getElementById(`parentDIV${indx}`);
  parent.append(div);
}
