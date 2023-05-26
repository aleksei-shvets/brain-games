import * as readlineSync from 'readline-sync';

const inputOut = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const randomInt = (increase) => Math.floor(Math.random() * increase + 1);

const randomArreyIndex = (arr) => Math.floor(Math.random() * arr.length);

const greetingInStart = () => {
  console.log('Welcome to the Brain Games!');
  const user = inputOut('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export {
  inputOut, randomInt, greetingInStart, randomArreyIndex,
};
