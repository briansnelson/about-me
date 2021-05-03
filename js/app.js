'use strict';
//console.log('Hello World!');
let totalScore = 0
let username = prompt('Hello! What is your name?');

alert('What\'s up, ' + username + '? Let\'s get to know each other. Please answer yes or no y/n to the questions.');

let questionOne = prompt('Was I a Soldier? Please answer yes or no y/n.').toLowerCase();
//console.log(questionOne);

if(questionOne === 'yes' || questionOne === 'y'){
  //console.log('questionOne:' + questionOne);
  alert('That\'s right!');
  totalScore++;

} else if(questionOne === 'no' || questionOne === 'n'){
  alert('No, in fact I was a Soldier for 27 years.');
}


let questionTwo = prompt('Do I own a business? Please answer yes or no y/n.').toLowerCase();
//console.log(questionTwo);
if(questionTwo === 'no'  || questionTwo === 'n'){
  alert('I\'m basically unemployable, ' + username + ' so I can only work for myself!');
} else if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('You Sir aaaarrrrrreee correct!');
  totalScore++;
}

let questionThree = prompt('Am I married? Please answer yes or no y/n.').toLowerCase();
//console.log(questionThree);

if(questionThree === 'no' || questionThree === 'n'){
  alert('Incorrect.' + username + '!' + ' Back of the line.');
  
} else if(questionThree === 'yes' || questionThree === 'y'){
  alert('Yes! 29 years! I\'m a lucky man!');
  totalScore++;
}

let questionFour = prompt('Do I rescue animals? Please answer yes or no.').toLowerCase();
//console.log(questionFour);

if(questionFour === 'no' || questionFour === 'n'){
  alert('Actually my wife and I co-founded Kindred Souls Foundation in 2005.');
} else if(questionFour === 'yes' || questionFour === 'y'){
  alert('Yes! Hope to see you run the stairs this August!');
  totalScore++;

}


let questionFive = prompt('Do I help Veterans find jobs? Please answer yes or no y/n.').toLowerCase();
//console.log(questionFive)
alert(username + ' I do help Veterans find jobs. Thanks for taking the time to get to know me. Have a great day.');
totalScore++;

let correctAnswer = 51
let tries = 4


//console.log(questionSix);

for(let i = 0; i < tries; i++){
  let questionSix = +prompt('How old am I? Take a stab, you got 4 chances to be right.');
  if(questionSix === correctAnswer){
    alert(`Well done!, I am ${correctAnswer} years old.`);
    totalScore++;
    break;
//console.log('Well done!, I am 51 years old.')
  } else if(questionSix < correctAnswer){
    alert('Thank you, but I\'m older than that.');
  } else if(questionSix > correctAnswer){
    alert('Damn Bro! Do I look that old?');
  }
  if(i === 3){
    alert('Sorry, out of guesses, my age is 51.');
  }
}

'use strict'

let formerTitles = ['Sir', 'Major', 'Sergeant', 'Private', 'Veteran', 'Dirty Hippie'];
//console.log(formerTitles.length)
let answer = false
let attemptsRemaining = 6;
// let questionSeven = prompt('How have people addressed me over the years?');
// //console.log('How have people addressed me over the years?');
// for (let i = 0; i < formerTitles.length; i++){
//   if(questionSeven === formerTitles[i]){
//    alert(`Correct. I've also been called ${formerTitles}`);
//    answer=true
//    break;
//     //console.log(questionSeven);
//   }
// }
// if (!answer) {
//   alert(`Not exactly, try again = ${attemptsRemaining} guesses left`);
// }
 




  // } //else if (questionSeven !== formerTitles[i]){
  //   alert(`Not exactly, try again = ${attemptsRemaining} guesses left`);
  // }}

while (attemptsRemaining && !answer){

  attemptsRemaining--;
  let questionSeven = prompt('How have people addressed me over the years?');
//console.log('How have people addressed me over the years?');
  for (let i = 0; i < formerTitles.length; i++){
    if(questionSeven === formerTitles[i]){
    alert(`Correct. I've also been called ${formerTitles}`);
    answer=true;
    totalScore++;
    break;
      //console.log(questionSeven);
    }
  }
  if (!answer) {
    alert(`Not exactly, try again = ${attemptsRemaining} guesses left`);
  }
  //console.log(`Not exactly, try again = ${attemptsRemaining}`);
}
console.log(totalScore);

alert(`Congrats Bro! You got ${totalScore} of 7 question.`);







