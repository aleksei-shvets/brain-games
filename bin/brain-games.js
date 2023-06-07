#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

const inputOut = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const greetingInStart = () => {
  console.log('Welcome to the Brain Games!');
  const user = inputOut('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

greetingInStart();
