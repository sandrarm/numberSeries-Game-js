/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let randomIncrement = Math.floor(Math.random()*10+1);
let cnumber1 = 1 * randomIncrement;
let cnumber2 = 2 * randomIncrement;
let cnumber3 = 3 * randomIncrement;
let cnumber4 = 4 * randomIncrement;
let cnumber5 = 5 * randomIncrement;
let cnumber6 = 6 * randomIncrement;
let cnumber7 = 7 * randomIncrement;

const n1 = document.querySelector('.cnumber1');
const n2 = document.querySelector('.cnumber2');
const n3 = document.querySelector('.cnumber3');
const n5 = document.querySelector('.cnumber5');
const n6 = document.querySelector('.cnumber6');

n1.textContent = cnumber1;
n2.textContent = cnumber2;
n3.textContent = cnumber3;
n5.textContent = cnumber5;
n6.textContent = cnumber6;


const message = document.querySelector('.message');

const resultSubmittedButton = document.querySelector('.button1');
const viewSolutionButton = document.querySelector('.button2');
const resetPressButton = document.querySelector('.button3');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');


function checkNumbers() {
  //alert('message');
  let numbreGuessed1 = Number(number1.value);
  let numberGuessed2 =  Number(number2.value);
  if (numbreGuessed1 === cnumber4 && numberGuessed2 === cnumber7){
      message.textContent = "Congratulations, correct numbers!";
  }
  else{
      message.textContent = "Incorrect numbers, try again.";
      
  }
  
}

function viewSolution(){
    message.textContent = "Here is the solution!";
    number1.value = cnumber4;
    number2.value = cnumber7;
}

function resetAll(){
   
    number1.value ="";
    number2.value = "";
    message.textContent ="";
    randomIncrement = Math.floor(Math.random()*10+1);
    cnumber1 = 1 * randomIncrement;
    cnumber2 = 2 * randomIncrement;
    cnumber3 = 3 * randomIncrement;
    cnumber4 = 4 * randomIncrement;
    cnumber5 = 5 * randomIncrement;
    cnumber6 = 6 * randomIncrement;
    cnumber7 = 7 * randomIncrement;

    n1.textContent = cnumber1;
    n2.textContent = cnumber2;
    n3.textContent = cnumber3;
    n5.textContent = cnumber5;
    n6.textContent = cnumber6;
    
  
}


resultSubmittedButton.addEventListener('click', checkNumbers);
viewSolutionButton.addEventListener('click', viewSolution);
resetPressButton.addEventListener('click', resetAll);
