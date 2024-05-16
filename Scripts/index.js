"use strict";

window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    const goodbyeBtn = document.getElementById("goodbyeBtn");

    // Adding event listeners to buttons
    helloBtn.addEventListener("click", onHelloBtnClick);
    goodbyeBtn.addEventListener("click", onGoodbyeBtnClick);
}

function onHelloBtnClick() {
    const output = document.getElementById("output");
    output.innerHTML = "HELLO!";
}

function onGoodbyeBtnClick() {
    const output = document.getElementById("output");
    output.innerHTML = "GOODBYE!";
}
