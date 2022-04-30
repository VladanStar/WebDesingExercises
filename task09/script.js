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

const moveRight = () => {
  displayNone();
  imgNum++;

  if (imgNum === pictures.length) {
    imgNum = 0;
  }

  console.log("Right");
  console.log(pictures);
  //   pictures[0].style.display = "none";
  pictures[imgNum].style.display = "block";
};
rightBtn.addEventListener("click", moveRight);
const moveLeft = () => {
  displayNone();
  imgNum--;
  console.log(imgNum);
  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }
  console.log("Left");
  console.log(pictures);
  //   pictures[0].style.display = "none";
  pictures[imgNum].style.display = "block";
};
leftBtn.addEventListener("click", moveLeft);
/*
Ova funkcija sakriva sve sle
 */
const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

/*
Data-Category Portfolio Sort
*/
const portfolioSort = (button) => {
  console.log(button);
  let category = button.getAttribute("data-category");
  console.log(category);
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");

  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });
  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }

  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

/* 
Modal
*/
const openModal = () => {
    console.log("Test");
    let modalWndow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay")
    overlay.style.display = 'block'
    modalWndow.style.display = "block";

}

const closeModal = () => {
    console.log("Test");
    let modalWndow = document.querySelector(".popup-modal");
    let overlay = document.querySelector(".overlay")
    overlay.style.display = 'none'
    modalWndow.style.display = "none";
}