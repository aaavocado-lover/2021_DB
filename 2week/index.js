/*const jsdom = require('mocha-jsdom');
global.document = jsdom({url: "http://localhost"});*/

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");
const printForm = document.getElementById("user");
const display = document.getElementById("form-result");

const handlePrint = (e) => {
    e.preventDefault();
    console.log(display);
    const fn = firstName.value
    const ln = lastName.value
    const em = email.value
    const id = userid.value

    const diplaySpan = display.querySelector("span");
    console.log(diplaySpan)
    diplaySpan.innerHTML = `
    First Name is: ${fn}<br>
    Last Name is: ${ln}<br>
    E-mail is: ${em}<br>
    ID is: ${id}`;
};

printForm.addEventListener("submit", handlePrint);