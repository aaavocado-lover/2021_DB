const machineNum = document.getElementById("js-range");
const guessNum = document.getElementById("js-guess");
const display = document.getElementById("js-result");
const num = document.getElementById("myNumber");

const handlePrint = (e) => {
    e.preventDefault();
    console.log(display);
    const mn = machineNum.value
    const gn = guessNum.value
    const n = num.value
    
    const displaySpan = display.querySelector("span");
    

    if(mn == n){
        displaySpan.innerHTML = `
        You choose: ${n}, the machine choose: ${mn}.<br>
        <b>You win!</b>`;
    }
    else if(mn != n){
        displaySpan.innerHTML = `
        You choose: ${n}, the machine choose: ${mn}.<br>
        <b>You lost!</b>`;
    }
};

guessNum.addEventListener("submit", handlePrint);
