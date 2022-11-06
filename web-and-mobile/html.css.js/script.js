window.addEventListener("load", function ()
{
let clickedCounterElement = document.getElementById("click-counter"); 
let clickButtonElement = document.getElementById("click-button")

let counter = 0;

let clickButtonFunction = function () 
{
    counter++;


    clickedCounterElement.innerHTML = counter; 
};

  
clickedButtonElement.addEventListener("click", clickButtonfunction);
});