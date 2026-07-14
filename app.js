const btn1 = document.querySelector(".block-1 button");
const party1 = document.querySelector(".block-1 span");
const btn2 = document.querySelector(".block-2 button");
const party2 = document.querySelector(".block-2 span");
const btn3 = document.querySelector(".block-3 button");
const party3 = document.querySelector(".block-3 span");
const btn4 = document.querySelector(".block-4 button");
const party4 = document.querySelector(".block-4 span");

let vote1 = 0;
let vote2 = 0;
let vote3 = 0;
let vote4 = 0;

btn1.addEventListener("click", () => {
    vote1 = vote1 + 1;
    party1.textContent = vote1;
    console.log("vote1");
});
btn1.addEventListener("click", () => {
    vote1 = vote1 + 1;
    party1.textContent = vote1;
    console.log("vote1");
});
btn1.addEventListener("click", () => {
    vote1 = vote1 + 1;
    party1.textContent = vote1;
    console.log("vote1");
});
btn1.addEventListener("click", () => {
    vote1 = vote1 + 1;
    party1.textContent = vote1;
    console.log("vote1");
});