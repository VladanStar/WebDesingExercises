/*
Response Header
*/
const mobileMenu = () => {
  console.log("Test");
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");

  console.log(menu);
  if (btn.innerText === "MENU") {
    console.log("MENU write");
    menu.style.display = "block";
    btn.innerHTML = "CLOSE";
  } else {
    console.log("CLOSE write");
    menu.style.display = "none";

    btn.innerHTML = "MENU";
  }
};
/*
Galerija
*/
let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");
let imgNum = 0;
rightBtn.addEventListener("click", () => {
  console.log("Right");
  console.log(pictures);
  pictures[0].style.display = "none";
  pictures[1].style.display = "block";
});
leftBtn.addEventListener("click", () => {
  console.log("Left");
});
