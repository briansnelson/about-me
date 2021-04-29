'use strict';
//console.log('Hello World!');

let username = prompt('Hello! What is your name?');

alert('What\'s up, ' + username + '? Let\'s get to know each other. Please answer yes or no y/n to the questions.');

let questionOne = prompt('Was I a Soldier? Please answer yes or no y/n.');
//console.log(questionOne);

if(questionOne === 'yes' || questionOne === 'y'){
  //console.log('questionOne:' + questionOne);
  alert('That\'s right!');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('No, in fact I was a Soldier for 27 years.');
}


let questionTwo = prompt('Do I own a business? Please answer yes or no y/n.');
//console.log(questionTwo);
if(questionTwo === 'no'  || questionTwo === 'n'){
  alert('I\'m basically unemployable, ' + username + ' so I can only work for myself!');
} else if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('You Sir aaaarrrrrreee correct!');
}

let questionThree = prompt('Am I married? Please answer yes or no y/n.');
//console.log(questionThree);

if(questionThree === 'no' || questionThree === 'n'){
  alert('Incorrect.' + username + ' Back of the line.');
} else if(questionThree === 'yes' || questionThree === 'y'){
  alert('Yes! 29 years! I\'m a lucky man!');
}

let questionFour = prompt('Do I rescue animals? Please answer yes or no.');
//console.log(questionFour);

if(questionFour === 'no' || questionFour === 'n'){
  alert('Actually my wife and I co-founded Kindred Souls Foundation in 2005.');
} else if(questionFour === 'yes' || questionFour === 'y'){
  alert('Yes! Hope to see you run the stairs this August!');
}


let questionFive = prompt('Do I help Veterans find jobs? Please answer yes or no y/n.');
//console.log(questionFive)
alert('I do help Veterans find work.');


