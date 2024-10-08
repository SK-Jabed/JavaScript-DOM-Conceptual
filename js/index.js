/**
 * Single Element Selector
 * 1. Select Element by Getting Id ==> .getElementById()
 * 2. Select Element by Query Selector ==> .querySelector()
 */
// ----- Select Element by Getting Id ==> .getElementById() -----
const header = document.getElementById("header");
header.style.color = "tomato";
header.style.textAlign = "center";
header.style.backgroundColor = "aqua";
header.style.fontFamily = "Arial";

// ----- Select Element by Query Selector ==> .querySelector() -----
const uniquePara = document.querySelector("#unique-para");
uniquePara.style.fontSize = "20px"
uniquePara.style.fontWeight = 600;
uniquePara.style.color = "purple"

const info = document.querySelector(".info");
info.style.color = "orange";
info.style.fontSize = "18px";
info.style.fontFamily = "Arial"
info.style.fontWeight = 600;


/**
 * Multiple Element Selector
 * 1. Select Element by Getting Tag Name ==> .getElementsByTagName()
 * 2. Select Element by Getting Class Name ==> .getElementsByClassName()
 * 3. Select Element by Query Selector ==> .querySelectorAll()
 */
// ----- Select Element by Getting Tag Name ==> .getElementsByTagName() -----
const myTags = document.getElementsByTagName("h4");
for (let i = 0; i < myTags.length; i++) {
    const element = myTags[i];
    element.style.border = "2px solid red";
    element.style.textAlign = "center";
    element.style.fontFamily = "Arial";
    element.style.fontWeight = 700;
}

// ----- Select Element by Getting Class Name ==> .getElementsByClassName() -----
const classElements = document.getElementsByClassName("para");
for (let i = 0; i < classElements.length; i++) {
    const para = classElements[i];
    para.style.backgroundColor = "gold"
    para.style.fontFamily = "Arial";
    para.style.fontWeight = 700;
}

// ----- Select Element by Query Selector ==> .querySelectorAll() -----
const myHeadings = document.querySelectorAll(".my-heading");
for (heading of myHeadings) {
    const info = heading;
    info.style.color = "white"
    info.style.backgroundColor = "darkViolet"
    info.style.border = "2px solid tomato";
    info.style.textAlign = "center";
    info.style.fontFamily = "Arial";
    info.style.fontWeight = 700;
}


/**
 * Nodes VS Element in DOM
 */
const secondContainer = document.querySelector(container2);

// console.log(container2.childNodes);
// console.log(container2.children);


/**
 * 1. parentElement
 * 2. children
 * 3. nextElementSibling vs nextSibling
 * 4. previousElementSibling
 */
const item2 = document.getElementById("item2");
const parent = item2.parentElement;
console.log(parent);

const previous = item2.previousElementSibling;
console.log(previous);

const nextElementSibling = item2.nextElementSibling;
console.log(nextElementSibling);

const nextSibling = item2.nextSibling;
console.log(nextSibling);


/**
 * innerText, textContent and innerHTML
 */

const container4 = document.querySelector("container");

console.log(container4.innerText);
console.log(container4.textContent);
console.log(container4.innerHTML);


/**
 * setAttribute, getAttribute and removeAttribute
 */

const myButton = document.getElementById("my-button");
myButton.setAttribute("class", "btn btn-primary common-class");
myButton.setAttribute("disabled", true);

myButton.removeAttribute("disabled");

const myLink = document.getElementById("my-link");
const link = myLink.getAttribute("href");
console.log(link);
console.log(myLink.getAttribute("title"));

/**
 * Creating an element and append 
 * Add class name 
 * classList[add(), remove()]
 * appendChild vs append 
 * remove or remove child
 */
const container5 = document.querySelector(".container5");
const p = document.createElement("p");
p.innerText = "I am created by JS dynamically";

container5.appendChild(p);
console.log(p);

const h1 = document.createElement("h1");
h1.textContent = "I am h1 , and i can inject to html through js";

// h1.classList.add("common-class");
h1.className = "common-class";
h1.classList.remove("common-class");
// container5.appendChild(h1);

// remove and remove child
// container5.remove();
container5.removeChild(h1);
container5.removeChild(p);
