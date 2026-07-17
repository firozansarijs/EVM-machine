const btn1 = document.querySelector(".block-1 button");
const party1 = document.querySelector(".block-1 span");

const btn2 = document.querySelector(".block-2 button");
const party2 = document.querySelector(".block-2 span");

const btn3 = document.querySelector(".block-3 button");
const party3 = document.querySelector(".block-3 span");

const btn4 = document.querySelector(".block-4 button");
const party4 = document.querySelector(".block-4 span");

const win = document.querySelector(".winner-block span");

const winbtn = document.querySelector(".winner-block .btn1");
const rebtn = document.querySelector(".winner-block .btn2");

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector1(".close");

const lock = document.querySelector(".lock");

const openSound = new Audio("sounds/videoplayback.m4a");
const voteSound = new Audio("sounds/videoplayback (1).m4a");

let ballotOpen = false;

let vote1 = 0;
let vote2 = 0;
let vote3 = 0;
let vote4 = 0;


openBtn.addEventListener("click", () => {

    ballotOpen = true;

    lock.textContent = "🟢 Voting Status : OPEN";

    openSound.currentTime = 0;
    openSound.play();

});

closeBtn.addEventListener("click", () => {

    ballotOpen = false;

    lock.textContent = "🔴 Voting Status : LOCKED";

});

btn1.addEventListener("click", () => {

    if(ballotOpen){

        vote1++;
        party1.textContent = vote1;

        voteSound.currentTime = 0;
        voteSound.play();

        ballotOpen = false;
        lock.textContent = "🔴 Voting Status : LOCKED";

    }else{

        alert("Officer must open the ballot first.");

    }

});

btn2.addEventListener("click", () => {

    if(ballotOpen){

        vote2++;
        party2.textContent = vote2;

        voteSound.currentTime = 0;
        voteSound.play();

        ballotOpen = false;
        lock.textContent = "🔴 Voting Status : LOCKED";

    }else{

        alert("Officer must open the ballot first.");

    }

});


btn3.addEventListener("click", () => {

    if(ballotOpen){

        vote3++;
        party3.textContent = vote3;

        voteSound.currentTime = 0;
        voteSound.play();

        ballotOpen = false;
        lock.textContent = "🔴 Voting Status : LOCKED";

    }else{

        alert("Officer must open the ballot first.");

    }

});


btn4.addEventListener("click", () => {

    if(ballotOpen){

        vote4++;
        party4.textContent = vote4;

        voteSound.currentTime = 0;
        voteSound.play();

        ballotOpen = false;
        lock.textContent = "🔴 Voting Status : LOCKED";

    }else{

        alert("Officer must open the ballot first.");

    }

});

winbtn.addEventListener("click", () => {

    if (vote1 === 0 && vote2 === 0 && vote3 === 0 && vote4 === 0) {

        win.textContent = "Please vote first.";

    }

    else if (vote1 > vote2 && vote1 > vote3 && vote1 > vote4) {

        win.textContent = "Maggi Lovers Party Winner 🏆";

    }

    else if (vote2 > vote1 && vote2 > vote3 && vote2 > vote4) {

        win.textContent = "Pizza Party Winner 🏆";

    }

    else if (vote3 > vote1 && vote3 > vote2 && vote3 > vote4) {

        win.textContent = "Javascript Janata Party Winner 🏆";

    }

    else if (vote4 > vote1 && vote4 > vote2 && vote4 > vote3) {

        win.textContent = "Python Janata Party Winner 🏆";

    }

    else{

        win.textContent = "Draw! Please vote again.";

    }

});

rebtn.addEventListener("click", () => {

    vote1 = 0;
    vote2 = 0;
    vote3 = 0;
    vote4 = 0;

    party1.textContent = vote1;
    party2.textContent = vote2;
    party3.textContent = vote3;
    party4.textContent = vote4;

    ballotOpen = false;

    lock.textContent = "🔴 Voting Status : LOCKED";

    win.textContent = "Please vote to see the winner.";

});
