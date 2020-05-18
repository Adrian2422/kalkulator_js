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

numBtns.forEach((item, index) => {
    item.addEventListener('click', e =>{
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
        }
        displayPrev.innerHTML = displayCurr.innerHTML;
        let secondNum = displayCurr.innerHTML;
        displayCurr.innerHTML = "0";

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

})