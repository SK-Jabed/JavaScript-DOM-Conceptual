// By Calling Function
let sum = 0;
function clickMe() {
    const count = document.getElementById("count");
    sum += 1;
    count.innerText = sum;
}


// By Event Listener
const minusButton = document.getElementById("minus-btn");

minusButton.addEventListener("click", function() {
    sum -= 1;
    count.innerText = sum;
    
})