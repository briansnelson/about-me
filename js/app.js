'use strict';

//console.log('Hello World!');

let username = prompt('Hello! What is your name?');

alert('Good Day, ' + username + '! Let\'s get to know each other. Please answer Yes or No to the questions below.');

let questionOne = prompt('Do I live in WA?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  console.log('questionOne:' + questionOne);
  alert('That\'s right!')
}

let questionTwo = prompt('Do I like animals?').toLowerCase();

if(questionTwo === 'no' || questionTwo === 'n'){
  console.log('questioneTwo:' + questionTwo);
  alert('Are you kidding me, ' + username + '? I love snuggling with the floofers!');
}else(questionTwo === 'yes' || )

let questionThree = prompt('')
