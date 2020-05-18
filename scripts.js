const numBtns = [...document.getElementsByClassName('num-button')].sort((a, b) => a.innerText - b.innerText);
const opBtns = [...document.getElementsByClassName('op-button')];
const pBtn = document.querySelector('.p-button');
const ceBtn = document.querySelector('.ce-button');
const cBtn = document.querySelector('.c-button');
const backBtn = document.querySelector('.backspace-button');
const dotBtn = document.querySelector('.dot-button');
const evalBtn = document.querySelector('.eval-button');

const displayCurr = document.querySelector('.current');
const displayPrev = document.querySelector('.prev');

let solved = false;

numBtns.forEach((item, index) => {
    item.addEventListener('click', e =>{
        if(solved){
            displayCurr.innerHTML = "";
            solved = false;
        }
        let display = displayCurr.innerHTML;
        if(displayCurr.innerHTML === "0"){
            display = displayCurr.innerHTML.slice(0,0);
        }
        if(display.length === 12){
            e.preventDefault();
        } else {
            display += numBtns[index].innerHTML;
        }
        displayCurr.innerHTML = display;
    })
})
opBtns.forEach((item,index) =>{
    item.addEventListener('click', e => {
        let display = displayCurr.innerHTML;
        if([...display].pop() === "."){
            display = [...display];
            display.pop();
            displayCurr.innerHTML = display.join("");
        } else if ([...display].shift() === "."){
            display = [...display];
            display.shift();
            displayCurr.innerHTML = display.join("");
        }
        let secondNum = displayCurr.innerHTML;
        displayCurr.innerHTML = "0";
        secondNum = [...secondNum];
        secondNum.push(opBtns[index].innerHTML);
        displayPrev.innerHTML = secondNum.join("");
    })
})
ceBtn.addEventListener('click', e => {
    e.preventDefault();
    displayCurr.innerHTML = "0";
    displayPrev.innerHTML = "";
})
cBtn.addEventListener('click', e => {
    e.preventDefault();
    displayCurr.innerHTML = "0";
})
backBtn.addEventListener('click', e => {
    e.preventDefault();
    let display = displayCurr.innerHTML;
    display = [...display];
    display.pop();
    displayCurr.innerHTML = display.join("");
})
pBtn.addEventListener('click', e => {
    e.preventDefault();
    let display = displayCurr.innerHTML;
    display /= 100;
    displayCurr.innerHTML = display;
})
dotBtn.addEventListener('click', e => {
    e.preventDefault();
    let display = displayCurr.innerHTML;
    display = [...display];
    const findDot = display.some(x => x === ".");
    findDot ? e.preventDefault() : display.push(".");
    displayCurr.innerHTML = display.join("");

})
evalBtn.addEventListener('click', e => {
    e.preventDefault();
    let numA = displayPrev.innerHTML;
    let numB = displayCurr.innerHTML;
    numA = [...numA];
    const op = numA.pop();
    numA = numA.join("");
    let solve = eval(`${numA} ${op} ${numB}`)
    displayCurr.innerHTML = solve;
    displayPrev.innerHTML = "";
    solved = true;
})