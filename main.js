"use strict"

let enter_togle_menu = document.querySelector('#menu');
let exit_togle_menu = document.querySelector("#exit");
let togle_menu = document.querySelector('.nav_dropdown');

enter_togle_menu.addEventListener("click", () => {
    togle_menu.style.cssText = "left: -30px;  transition: all 0.1s linear; opacity: 1;"
});

exit_togle_menu.addEventListener("click", () => {
    togle_menu.style.cssText = " left: 500px; transition: all 0.1s linear; opacity: 0;"
});
