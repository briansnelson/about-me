'use strict';
//console.log('Hello World!');
//declare variables
let totalScore = 0;
let username = prompt('Hello! What is your name?');
let questionArray = ['Was I a Soldier?', 'Do I own a business?', 'Am I married?', 'Do I rescue animals?', 'Do I help Veterans find jobs?', 'How old am I?', 'How have people addressed me over the years?'];

let corrrectAnswers = ['yes', 'y', 51, 'Sir', 'Major', 'Sergeant', 'Private', 'Veteran', 'Dirty Hippie'];
alert('What\'s up, ' + username + '? Let\'s get to know each other. Please answer yes or no y/n to the questions.');


//functions declared
function q1(){
  let questionOne = prompt(`${questionArray[0]} Please answer yes or no y/n.`).toLowerCase();
  //console.log(questionOne);

  if(questionOne === corrrectAnswers[0] || questionOne === corrrectAnswers[1]){
    //console.log('questionOne:' + questionOne);
    alert('That\'s right!');
    totalScore++;

  } else if(questionOne === 'no' || questionOne === 'n'){
    alert('No, in fact I was a Soldier for 27 years.');
  }
}
function q2(){
  let questionTwo = prompt(`${questionArray[1]} Please answer yes or no y/n.`).toLowerCase();
  //console.log(questionTwo);
  if(questionTwo === 'no'  || questionTwo === 'n'){
    alert('I\'m basically unemployable, ' + username + ' so I can only work for myself!');
  } else if(questionTwo === corrrectAnswers[0] || questionTwo === corrrectAnswers[1]) {
    alert('You Sir aaaarrrrrreee correct!');
    totalScore++;
  }
}
function q3(){
  let questionThree = prompt(`${questionArray[2]}Please answer yes or no y/n.`).toLowerCase();
  //console.log(questionThree);

  if(questionThree === 'no' || questionThree === 'n'){
    alert('Incorrect.' + username + '!' + ' Back of the line.');
    
  } else if(questionThree === corrrectAnswers[0] || questionThree === corrrectAnswers[1]){
    alert('Yes! 29 years! I\'m a lucky man!');
    totalScore++;
  }
}
function q4(){
  let questionFour = prompt(`${questionArray[3]} Please answer yes or no.`).toLowerCase();
  //console.log(questionFour);

  if(questionFour === 'no' || questionFour === 'n'){
    alert('Actually my wife and I co-founded Kindred Souls Foundation in 2005.');
  } else if(questionFour === corrrectAnswers[0] || questionFour === corrrectAnswers[1]){
    alert('Yes! Hope to see you run the stairs this August!');
    totalScore++;

  }
}
function q5(){
  let questionFive = prompt(`${questionArray[4]} Please answer yes or no y/n.`).toLowerCase();
  //console.log(questionFive)
  alert(username + ' I do help Veterans find jobs. Thanks for taking the time to get to know me. Have a great day.');
  totalScore++;
}
function q6(){
  let correctAnswer = 51
  let tries = 4


  //console.log(questionSix);

  for(let i = 0; i < tries; i++){
    let questionSix = +prompt(`${questionArray[5]} Take a stab, you got 4 chances to be right.`);
    if(questionSix === corrrectAnswers[2]){
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
}
function q7(){
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
    let questionSeven = prompt(`${questionArray[6]}`);
    //console.log('How have people addressed me over the years?');
    for (let i = 3; i < corrrectAnswers.length; i++){
      if(questionSeven === corrrectAnswers[i]){
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
}

//call functions
q1();
q2();
q3();
q4();
q5();
q6();
q7();
