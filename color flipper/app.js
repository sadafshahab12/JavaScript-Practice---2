let colorName = document.getElementsByClassName("color-name")[0];

let colorFlipButton = document.querySelector(".flip-button");
let body = document.getElementsByTagName("body")[0];
let copyButton = document.querySelector(".copy-button");
let colorHistoryList = document.querySelector(".color-list");
console.log(body);
let colorList = [];
// function flipColor() {
//   let colors = ["red", "green", "blue", "pink"];

//   let randomIndexOfColor = Math.floor(Math.random() * colors.length);
//   console.log(randomIndexOfColor);

//   let selectedColor = colors[randomIndexOfColor];
//   console.log(selectedColor);
//   body.style.backgroundColor = selectedColor;
// }

// colorFlipButton.addEventListener("click", flipColor);
console.log(colorName);
console.log(colorFlipButton);

function flipColor() {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    console.log(randomIndex);
    hash += hex[randomIndex];
  }
  body.style.backgroundColor = hash;
  colorName.textContent = hash;
  console.log(hash);

  colorList.unshift(hash);
  if (colorList.length > 5) {
    colorList.pop();
  }

  updateColorHistoryUI();
}
function copyColor() {
  navigator.clipboard.writeText(colorName.textContent);
  alert("Color copied to clipboard:" + colorName.textContent);
}
// color history
function updateColorHistoryUI() {
  colorHistoryList.innerHTML = "";
  if (colorList.length === 0) {
    let li = document.createElement("li");
    li.textContent = "No colors available";
    colorHistoryList.appendChild(li);
  } else {
    colorList.forEach((colorCode) => {
      let li = document.createElement("li");
      const copy = document.createElement("button");
      copy.textContent = "Copy";
      copy.className = "copy-button";
      li.textContent = colorCode;
      li.style.backgroundColor = colorCode;
      li.style.color = "#fff";
      li.style.padding = "5px 10px";
      li.style.marginBottom = "5px";
      li.style.borderRadius = "5px";
      li.style.fontWeight = "bold";
      
      colorHistoryList.appendChild(li);
      li.appendChild(copy);

      copy.addEventListener("click", () => {
        navigator.clipboard.writeText(colorCode);
        alert("Color copied to clipboard:" + colorCode);
      });
    });
  }
}
updateColorHistoryUI();
colorFlipButton.addEventListener("click", flipColor);
copyButton.addEventListener("click", copyColor);
