let container = document.querySelector(".container");
let charList = document.querySelector(".charList");

for (let i = 0; i < images.src.length; i++) {
  let newImg = document.createElement("img");
  let newList = document.createElement("li");
  let newA = document.createElement("a");
  //   newList.appendChild(document.createTextNode(i));

  charList.append(newA);
  newImg.classList.add("char");
  newA.appendChild(newList);
  newList.append(newImg);
}
let char = document.querySelectorAll(".char");
let charLink = document.querySelectorAll(".charList a");
for (let i = 0, j = 1; i < 22 || j < 23; i++, j++) {
  charLink[i].setAttribute("target", "_blank");
  char[i].src = images.src[i];
  charLink[i].href = "https://naruto-arena.net/en/char/" + j;
}
char[22].src = images.src[22];
charLink[22].href = "https://naruto-arena.net/en/char/" + 195;
char[23].src = images.src[23];
charLink[23].href = "https://naruto-arena.net/en/char/" + 192;
char[24].src = images.src[24];
charLink[24].href = "https://naruto-arena.net/en/char/" + 251;
char[25].src = images.src[25];
charLink[25].href = "https://naruto-arena.net/en/char/" + 252;
char[26].src = images.src[26];
charLink[26].href = "https://naruto-arena.net/en/char/" + 258;

for (
  let i = 26, j = 22;
  i < images.src.length || j < images.src.length;
  i++, j++
) {
  // if (j == 258 || j == 195 || j == 192 || j == 251 || j == 252) {
  // }
  // if (i == 22 || 23 || 24 || 25 || 26) {
  // }
  charLink[i].setAttribute("target", "_blank");
  char[i].src = images.src[i];
  charLink[i].href = "https://naruto-arena.net/en/char/" + j;
}

charLink[27].href = "https://naruto-arena.net/en/char/211";

charLink[258].href = "https://naruto-arena.net/en/char/236";
charLink[195].href = "https://naruto-arena.net/en/char/264";
charLink[192].href = "https://naruto-arena.net/en/char/149";
charLink[251].href = "https://naruto-arena.net/en/char/271";
charLink[252].href = "https://naruto-arena.net/en/char/272";
