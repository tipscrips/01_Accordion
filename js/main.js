"use strict";

function openHiddingElem(elem) {
  elem.classList.toggle("open-item");
}
let btns = document.querySelectorAll(".btn");

for (let btn of btns) {
  btn.setAttribute("onclick", "openHiddingElem(this.parentElement)");
}
