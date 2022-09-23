"use strict";

setInterval(autoSlide, 4000);

function autoSlide() {
  if (
    document.getElementsByClassName("items")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("items")[1].classList.add("active");
    document.getElementsByClassName("items")[0].classList.remove("active");
  } else if (
    document.getElementsByClassName("items")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("items")[2].classList.add("active");
    document.getElementsByClassName("items")[1].classList.remove("active");
  } else if (
    document.getElementsByClassName("items")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("items")[0].classList.add("active");
    document.getElementsByClassName("items")[2].classList.remove("active");
  }
}

function lClick() {
  if (
    document.getElementsByClassName("items")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("items")[2].classList.add("active");
    document.getElementsByClassName("items")[0].classList.remove("active");
  } else if (
    document.getElementsByClassName("items")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("items")[1].classList.add("active");
    document.getElementsByClassName("items")[2].classList.remove("active");
  } else if (
    document.getElementsByClassName("items")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("items")[0].classList.add("active");
    document.getElementsByClassName("items")[1].classList.remove("active");
  }
}
