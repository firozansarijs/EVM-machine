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

let vote1 = 0;
let vote2 = 0;
let vote3 = 0;
let vote4 = 0;

btn1.addEventListener("click", () => {
    vote1 = vote1 + 1;
    party1.textContent = vote1;
    console.log("vote1");
});
btn2.addEventListener("click", () => {
    vote2 = vote2 + 1;
    party2.textContent = vote2;
    console.log("vote2");
});
btn3.addEventListener("click", () => {
    vote3 = vote3 + 1;
    party3.textContent = vote3;
    console.log("vote3");
});
btn4.addEventListener("click", () => {
    vote4 = vote4 + 1;
    party4.textContent = vote4;
    console.log("vote4");
});

winbtn.addEventListener("click" , () =>{
    if(vote1 > vote2 && vote1 > vote3 && vote1 > vote4){
        let print1 = "maggie lover party winner";
        win.textContent = print1;
        console.log(print1);
    }else if(vote2 > vote1 && vote2 > vote3 && vote2 > vote4){
       let print2 = "Pizza Party winner";
       win.textContent = print2;
       console.log(print2);
    }else if(vote3 > vote1 && vote3 > vote2 && vote3 > vote4){
       let print3 = "Javascript janata party winner";
       win.textContent = print3;
       console.log(print3); 
    }else if(vote4 > vote1 && vote4 > vote2 && vote4 > vote3){
       let print4 = "python janata party winner";
       win.textContent = print4;
       console.log(print4);  
    }

    rebtn.addEventListener("click" , () => {
     vote1 = 0;
     party1.textContent = vote1;
     console.log(vote1); 
     vote2 = 0;
     party2.textContent = vote2;
     console.log(vote2); 
     vote3 = 0;
     party3.textContent = vote3;
     console.log(vote3); 
     vote4 = 0;
     party4.textContent = vote4;
     console.log(vote4); 
     winbtn.span.textContent = ""
     console.log(winbtn)
}) 
})
  