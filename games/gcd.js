import { inputOut, randomInt, greetingInStart } from '../src/index.js';

const gcd = () => {
  const userName = greetingInStart();
  console.log('Find the greatest common divisor of given numbers.');
  for (let count = 1; count <= 3; count += 1) {
    const firstNumber = randomInt(60);
    const secondNumber = randomInt(50);
    let marker;
    let correctAnswer;
    let upperBound;
    let gcdNumber;

    if (firstNumber !== secondNumber) {
      if (firstNumber > secondNumber) {
        marker = firstNumber;
      } else {
        marker = secondNumber;
      }
      upperBound = Math.floor(marker / 2);
    } else {
      upperBound = firstNumber;
    }
    for (let i = upperBound; gcdNumber === undefined; i -= 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        gcdNumber = i;
      }
      correctAnswer = gcdNumber;
    }
    const questionLine = `${firstNumber} ${secondNumber}`;
    const answer = inputOut(`Question: ${questionLine} \nYour answer: `);
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gcd;
