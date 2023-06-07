#!/usr/bin/env node

import * as readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const user = readlineSync.question('May I have your name? ');
console.log(`Hello, ${user}!`);
