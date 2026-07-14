const btn1 = document.querySelector(".block-1 button");
const party1 = document.querySelector(".block-1 span");

let vote1 = 0;

btn1.addEventListener("click", () => {
    vote1 = vote1 + 1;
    party1.textContent = vote1;
    console.log("vote1");
});