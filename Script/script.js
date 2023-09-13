"use strict";
const hamburger = document.querySelector(".mobile-hamburger");
const listUl = document.querySelector(".hide");
const close = document.querySelector('.mobile-close');
const icon = document.querySelector('.icon')

hamburger.addEventListener("click", () => {
  listUl.classList.toggle("active");
});

// hamburger.onclick = function(){
//     if (icon.classList.contains('hamburger')){
//         icon.classList.replace('hamburger', 'close')
//     }
// }