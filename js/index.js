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
    info.style.backgroundColor = "darkviolet"
    info.style.border = "2px solid tomato";
    info.style.textAlign = "center";
    info.style.fontFamily = "Arial";
    info.style.fontWeight = 700;
}


/**
 * Nodes VS Element in DOM
 */
const secondContainer = document.querySelector(container2);

console.log(container2.childNodes);
console.log(container2.children);