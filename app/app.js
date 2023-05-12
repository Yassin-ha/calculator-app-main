const numbersBtns = document.querySelectorAll('.data-number');
const operationBtns = document.querySelectorAll('.data-operation');
const deleteBtn = document.querySelector('.delete');
const clearAllBtn = document.querySelector('.clear-all');
const equal = document.querySelector(".equal");
const op = document.querySelector(".op > span");
const opC = document.getElementById("op");

numbersBtns.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    })
})
operationBtns.forEach(button => {
    button.addEventListener("click", () => {
        appendOp(button.textContent);
    })
})
deleteBtn.addEventListener("click", () => {
    del();
})
clearAllBtn.addEventListener("click", () => {
    clearAll();
})
equal.addEventListener("click", () => {
    compute();
})
function appendOp(operation) {
    let previawVal = op.innerText;
    op.innerText = previawVal + operation;
}

function clearAll() {
    op.innerText = "0";
}

function appendNumber(number) {
    var previawVal = op.innerText;

    if(previawVal == "0"){
        previawVal = number;
        op.innerText = previawVal;
    } else {
        op.innerText = previawVal + number;
    }
}


function del() {
    let arreyResut = op.textContent.split("");
    arreyResut.pop();

    if(arreyResut.length == 0) {
        arreyResut.push('0')
    }
    let newResult = arreyResut.join("");
    op.innerText = newResult;
}


function compute() {
    let opEx = op.textContent;
    if(opEx.includes("+")){
        let arrEx = opEx.split("+");
        let firstN = arrEx[0];
        let secondN = arrEx[1];

        let result = Number(firstN) + Number(secondN);

        op.innerText = result;

        if(result.toString().length > 15) {
            opC.style.fontSize = "28px";
        }
    } else if(opEx.includes("-")){
        let arrEx = opEx.split("-");
        let firstN = arrEx[0];
        let secondN = arrEx[1];

        let result = Number(firstN) - Number(secondN);

        op.innerText = result;

        if(result.toString().length > 15) {
            opC.style.fontSize = "28px";
        }
    } else if(opEx.includes("x")){
        let arrEx = opEx.split("x");
        let firstN = arrEx[0];
        let secondN = arrEx[1];

        let result = Number(firstN) * Number(secondN);

        op.innerText = result;

        if(result.toString().length > 15) {
            opC.style.fontSize = "28px";
        }
    } else if(opEx.includes("/")){
        let arrEx = opEx.split("/");
        let firstN = arrEx[0];
        let secondN = arrEx[1];

        let result = Number(firstN) / Number(secondN);

        op.innerText = result;

        if(result.toString().length > 15) {
            opC.style.fontSize = "28px";
        }


    } else {
        op.innerText;
    }
}


