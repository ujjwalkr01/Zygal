let inpt = document.getElementById("inpt");
let btn = document.getElementById("btn");
let parentDiv = document.getElementById("parentDiv");

btn.addEventListener("click", () => {
  let width = 100;
  let height = 100;
  parentDiv.innerHTML = "";

  let widthVal = width / inpt.value;
  let heightVal = height / inpt.value;

  //function for creating the  2d Matrix
  creating2dMatrix(widthVal, heightVal, inpt.value);
});

function creating2dMatrix(widthVal, heightVal, n) {
  for (let i = 1; i <= n; i++) {
    //function for creating the parentDiv
    createParentDiv(i, heightVal);
    for (let j = 1; j <= n; j++) {
      //condition for creating the child div and highlighting the bgColor as black
      if (j == n - i + 1) {
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
