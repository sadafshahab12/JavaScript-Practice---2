let colorPicker = document.getElementById("colorPicker");
let box = document.getElementsByClassName("box")[0];

colorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
//   console.log(color);
  box.style.backgroundColor = e.target.value;
  box.innerText = color;
  // box.style.backgroundColor= colorPicker.value
 
});
 box.addEventListener("click", () => {
    const color = colorPicker.value;
    console.log(color)
    navigator.clipboard.writeText(color);
    alert(`${color} copied successfully`)
  });