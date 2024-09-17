/**
 * Single Element Selector
 */
const header = document.getElementById("header");
header.style.color = "tomato";

const uniquePara = document.querySelector("unique-para");
uniquePara.style.border = "2px solid red";

/**
 * Multiple Element Selector
 */
const myTags = document.getElementsByTagName("p");
for (let i = 0; i < myTags.length; i++) {
    const element = myTags[1];
    element.style.backgroundColor = "Yellow";
    element.style.fontSize = "24px";
}

const allClassElements = document.getElementsByClassName("info");


const myParagraph = document.querySelectorAll(".info");


/**
 * Nodes VS Element in DOM
 */

const secondContainer = document.querySelector(container2);
console.log(container2.children);

