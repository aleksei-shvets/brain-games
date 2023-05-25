#!/usr/bin/env node

import inputOut from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const greetingQuestion = 'May I have your name?';
console.log(`Hello, ${inputOut(greetingQuestion)}!`);
