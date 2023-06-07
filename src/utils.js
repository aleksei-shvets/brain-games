import * as readlineSync from 'readline-sync';

export const inputOut = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export const greetingInStart = () => {
  console.log('Welcome to the Brain Games!');
  const user = inputOut('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
