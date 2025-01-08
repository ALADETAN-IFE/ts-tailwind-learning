"use strict";
const add_btn = document.querySelector("#add_btn");
const subtract_btn = document.querySelector("#subtract_btn");
const counter = document.querySelector("#counter");
let count = 0;
if (add_btn && subtract_btn && counter) {
    add_btn.addEventListener("click", () => {
        count++;
        counter.textContent = count.toString();
    });
    subtract_btn.addEventListener("click", () => {
        if (count > 0) {
            count--;
        }
        counter.textContent = count.toString();
    });
}
