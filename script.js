const redSquare = document.querySelector('.red-square');
redSquare.style.backgroundColor = 'limegreen';

//-------------------------------------------------------------

const elementsToChange = document.querySelectorAll('.js-target');
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

//-------------------------------------------------------------

const button = document.querySelector('.event-button');
button.addEventListener('click', foo);

function foo (){
    alert("Hey there!");
}

//-------------------------------------------------------------

const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener("keyup", function() {
  paragraph.innerText  = input.value;
});

//-------------------------------------------------------------
const inputOne = document.querySelector('.color-input');
const paragraphOne = document.querySelector('.color-box');

inputOne.addEventListener("change", function() {
    paragraphOne.style.backgroundColor  = inputOne.value;
});
//mediumseagreen, dodgerblue, peru, papayawhip


//-------------------------------------------------------------

//reactive to user inputs with JS
//We listen for events (clicks) and responds with callbacks.
