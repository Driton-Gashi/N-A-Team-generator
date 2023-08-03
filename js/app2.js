let char1 = document.querySelector(".char1 img");
let char2 = document.querySelector(".char2 img");
let char3 = document.querySelector(".char3 img");

let name1 = document.querySelector(".char1-name");
let name2 = document.querySelector(".char2-name");
let name3 = document.querySelector(".char3-name");
let allImgs = document.querySelectorAll(".box-container div img");
let emri = document.querySelectorAll(".box-container div p");
let btn = document.querySelector(".btn");
// qetu i kom caktu variablat

btn.addEventListener("click", function () {
  let nje, dy, tre;
  nje = randomNumber();
  dy = randomNumber();
  tre = randomNumber();

  char1.src = images.src[nje];
  char2.src = images.src[dy];
  char3.src = images.src[tre];

  if (
    char1.src == char2.src ||
    char2.src == char3.src ||
    char3.src == char1.src
  ) {
    char1.src = images.src[randomNumber()];
    char2.src = images.src[randomNumber()];
    char3.src = images.src[randomNumber()];
  }

  name1.innerHTML = images.names[nje];
  name2.innerHTML = images.names[dy];
  name3.innerHTML = images.names[tre];

  function titleHover() {
    name1.setAttribute("title", images.names[nje]);
    name2.setAttribute("title", images.names[dy]);
    name3.setAttribute("title", images.names[tre]);

    char1.setAttribute("title", images.names[nje]);
    char2.setAttribute("title", images.names[dy]);
    char3.setAttribute("title", images.names[tre]);
  }
  titleHover();

  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].style.animationPlayState = "paused";
    emri[i].style.right = "0";
  }
});

function randomNumber() {
  return Math.floor(Math.random() * images.src.length);
}
