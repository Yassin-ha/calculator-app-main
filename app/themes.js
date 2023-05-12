const themeOne = document.getElementById('theme-one');
const themeTwo = document.getElementById('theme-two');
const themeThree = document.getElementById('theme-three');
const checkbtn = document.getElementsByClassName("check-btn");
const calc = document.getElementById("calc");
const head = document.getElementById("head");
const toggle = document.getElementById("toggle");
const opContainer = document.getElementById("op");
const btnsContainer = document.getElementById("btns-container");
const numbers = document.querySelectorAll(".numbers");
const btnsP = document.querySelectorAll(".b-p");
const eqBtn = document.querySelector(".equal");
const opValue = document.querySelector(".op > span");



// first theme 

themeOne.addEventListener("click", function() {
    // active theme 

    for(let i = 0; i < checkbtn.length; i++){
        checkbtn[i].classList.remove("active");
    }
    themeOne.classList.add("active");

    // change main color 

    document.body.style.backgroundColor = "var(--very-dark-bleu-main)";
    calc.style.backgroundColor = "var(--very-dark-bleu-main)";
    head.style.color = "var(--white)";
    toggle.style.backgroundColor = "var(--very-dark-bleu-toggle)";
    opValue.style.color = "var(--white)";
    opContainer.style.backgroundColor = "var(--very-dark-bleu-screen)";
    btnsContainer.style.backgroundColor = "var(--very-dark-bleu-toggle)";

     // change button color 
    
    for(let i = 0; i < numbers.length; i++){
        numbers[i].classList.remove("th-N-two");
        numbers[i].classList.remove("th-N-three");
        numbers[i].classList.add("th-N-one");
    }
    for(let i = 0; i < btnsP.length; i++) {
        btnsP[i].classList.remove("th-P-two");
        btnsP[i].classList.remove("th-P-three");
        btnsP[i].classList.add("th-P-one");
    }

    eqBtn.classList.remove("th-E-two");
    eqBtn.classList.remove("th-E-three");
    eqBtn.classList.add("th-E-one")
    
})

// second theme 

themeTwo.addEventListener("click", function() {

    // active theme 

    for(let i = 0; i < checkbtn.length; i++){
        checkbtn[i].classList.remove("active");
    }
    themeTwo.classList.add("active");

    // change main color 

    document.body.style.backgroundColor = "var(--light-gray)";
    calc.style.backgroundColor = "var(--light-gray)";
    head.style.color = "var(--very-dark-grayish-yellow)";
    toggle.style.backgroundColor = "var(--grayish-red)";
    opContainer.style.backgroundColor = "var(--white)";
    opValue.style.color = "var(--very-dark-grayish-yellow)";
    btnsContainer.style.backgroundColor = "var(--grayish-red)";

     // change button color 

    for(let i = 0; i < numbers.length; i++){
        numbers[i].classList.remove("th-N-one");
        numbers[i].classList.remove("th-N-three");
        numbers[i].classList.add("th-N-two");
        
    }
    for(let i = 0; i < btnsP.length; i++) {
        btnsP[i].classList.remove("th-P-one");
        btnsP[i].classList.remove("th-P-three");
        btnsP[i].classList.add("th-P-two");
    }
    
    eqBtn.classList.remove("th-E-one");
    eqBtn.classList.remove("th-E-three");
    eqBtn.classList.add("th-E-two")
})



// third theme 

themeThree.addEventListener("click", function() {

    // active theme 
    
    for(let i = 0; i < checkbtn.length; i++){
        checkbtn[i].classList.remove("active");
    }
    themeThree.classList.add("active");

    // change main color 

    document.body.style.backgroundColor = "var(--very-dark-violet-main)";
    calc.style.backgroundColor = "var(--very-dark-violet-main)";
    head.style.color = "var( --light-yellow)";
    toggle.style.backgroundColor = "var(--very-dark-violet)";
    opContainer.style.backgroundColor = "var(--very-dark-violet)";
    opValue.style.color = "var( --light-yellow)";

    // change button contaier color 

    btnsContainer.style.backgroundColor = "var(--very-dark-violet)";

    // change button color 

    for(let i = 0; i < numbers.length; i++){
        numbers[i].classList.remove("th-N-one");
        numbers[i].classList.remove("th-N-two");
        numbers[i].classList.add("th-N-three");
    }
    for(let i = 0; i < btnsP.length; i++) {
        btnsP[i].classList.remove("th-P-one");
        btnsP[i].classList.remove("th-P-two");
        btnsP[i].classList.add("th-P-three");
    }

    eqBtn.classList.remove("th-E-two");
    eqBtn.classList.remove("th-E-one");
    eqBtn.classList.add("th-E-three");
})