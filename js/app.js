let char1 = document.querySelector(".char1 img");
let char2 = document.querySelector(".char2 img");
let char3 = document.querySelector(".char3 img");
let char4 = document.querySelector(".char4 img");
let char5 = document.querySelector(".char5 img");
let char6 = document.querySelector(".char6 img");
let name1 = document.querySelector(".char1-name");
let name2 = document.querySelector(".char2-name");
let name3 = document.querySelector(".char3-name");
let name4 = document.querySelector(".char4-name");
let name5 = document.querySelector(".char5-name");
let name6 = document.querySelector(".char6-name");
let emri = document.querySelectorAll(".box-container div p");
let allImgs = document.querySelectorAll(".box-container div img");
let btn = document.querySelector(".btn");
// qetu i kom caktu variablat

btn.addEventListener("click", function () {
  let nje, dy, tre, kater, pes, gjasht;
  nje = randomNumber();
  dy = randomNumber();
  tre = randomNumber();
  kater = randomNumber();
  pes = randomNumber();
  gjasht = randomNumber();

  char1.src = images.src[nje];
  char2.src = images.src[dy];
  char3.src = images.src[tre];
  char4.src = images.src[kater];
  char5.src = images.src[pes];
  char6.src = images.src[gjasht];

  if (
    char1.src == char2.src ||
    char2.src == char3.src ||
    char3.src == char1.src
  ) {
    char1.src = images.src[randomNumber()];
    char2.src = images.src[randomNumber()];
    char3.src = images.src[randomNumber()];
  }

  if (
    char4.src == char5.src ||
    char6.src == char4.src ||
    char5.src == char6.src
  ) {
    char4.src = images.src[randomNumber()];
    char5.src = images.src[randomNumber()];
    char6.src = images.src[randomNumber()];
  }

  name1.innerHTML = images.names[nje];
  name2.innerHTML = images.names[dy];
  name3.innerHTML = images.names[tre];
  name4.innerHTML = images.names[kater];
  name5.innerHTML = images.names[pes];
  name6.innerHTML = images.names[gjasht];
  function titleHover() {
    name1.setAttribute("title", images.names[nje]);
    name2.setAttribute("title", images.names[dy]);
    name3.setAttribute("title", images.names[tre]);
    name4.setAttribute("title", images.names[kater]);
    name5.setAttribute("title", images.names[pes]);
    name6.setAttribute("title", images.names[gjasht]);

    char1.setAttribute("title", images.names[nje]);
    char2.setAttribute("title", images.names[dy]);
    char3.setAttribute("title", images.names[tre]);
    char4.setAttribute("title", images.names[kater]);
    char5.setAttribute("title", images.names[pes]);
    char6.setAttribute("title", images.names[gjasht]);
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
let navMenu = document.querySelector("nav ul");
let burger = document.querySelector("nav ul li img");
