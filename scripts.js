const numBtns = [...document.getElementsByClassName('num-button')].sort((a, b) => a.innerText - b.innerText);
const opBtns = [...document.getElementsByClassName('op-button')];
const pBtn = document.querySelector('.p-button');
const ceBtn = document.querySelector('.ce-button');
const cBtn = document.querySelector('.c-button');
const backBtn = document.querySelector('.backspace-button');
const dotBtn = document.querySelector('.dot-button');
const evalBtn = document.querySelector('.eval-button');
const memRecBtn = document.querySelector('.memRec-button');
const memReadBtn = document.querySelector('.memRead-button');
const rootBtn = document.querySelector('.root-button');
const powBtn = document.querySelector('.power-button');
const logBtn = document.querySelector('.log-button')

const displayCurr = document.querySelector('#lowerDisplay');
const displayPrev = document.querySelector('#higherDisplay');

let solved = false;
let memory = {
    value: "0",
    empty: true,
};
numBtns.forEach((item, index) => {
    item.addEventListener('click', e =>{
        if(solved){
            displayCurr.innerHTML = "";
            displayPrev.innerHTML = "";
            solved = false;
        }
        let display = displayCurr.innerHTML;
        if(displayCurr.innerHTML === "0"){
            display = displayCurr.innerHTML.slice(0,0);
        }
        if(display.length === 15){
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
rootBtn.addEventListener('click', e => {
    let display = parseFloat(displayCurr.innerHTML);
    displayCurr.innerHTML = Math.sqrt(display).toString();
})
powBtn.addEventListener('click', e => {
    let display = parseFloat(displayCurr.innerHTML);
    displayCurr.innerHTML = Math.pow(display, 2).toString();
})
logBtn.addEventListener('click', e => {
    let display = parseFloat(displayCurr.innerHTML);
    displayCurr.innerHTML = Math.log(display).toString();
})
memRecBtn.addEventListener('click', e => {
    e.preventDefault();
    memory.value = displayCurr.innerHTML;
    memory.empty = false;
    document.querySelector('.memRead-button').setAttribute('style', "border:3px solid #00ff44;border-radius:5px;margin:0;");
})
memReadBtn.addEventListener('click', e => {
    displayCurr.innerHTML = memory.value;
})
ceBtn.addEventListener('click', e => {
    e.preventDefault();
    displayCurr.innerHTML = "0";
    displayPrev.innerHTML = "";
})
cBtn.addEventListener('click', e => {
    e.preventDefault();
    displayCurr.innerHTML = "0";
    memory.value = "0";
    document.querySelector('.memRead-button').removeAttribute('style');
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
    displayPrev.innerHTML = numA + numB;
    numA = [...numA];
    const op = numA.pop();
    numA = numA.join("");
    let solve = eval(`${numA} ${op} ${numB}`)
    displayCurr.innerHTML = solve;
    solved = true;
})
