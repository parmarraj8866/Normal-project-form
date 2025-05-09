const userName = document.getElementById("username");
const email = document.getElementById("email");
const numbers = document.getElementById("number");
const button = document.getElementById("btn");

let output = document.querySelector(".output");
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para3 = document.querySelector(".para3");


function printFNX() {

    if (userName.value === "" || email.value === "" || numbers.value === "") {
        para1.innerHTML = `UserName = No Information`;
        para2.innerHTML = `Email ID = No Information`;
        para3.innerHTML = `Mobile Number = No Information`;
        output.style.display = "block"
    }
    else {
        output.style.display = "block"
        const a = userName.value;
        para1.innerHTML = `UserName = ${a}`;
        const b = email.value;
        para2.innerHTML = `Email ID = ${b}`;
        const c = numbers.value;
        para3.innerHTML = `Mobile Number = ${c}`;
    }
}
