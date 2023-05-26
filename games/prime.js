import { inputOut, randomInt, greetingInStart } from '../src/index.js';

const prime = () => {
  const userName = greetingInStart();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const isPrime = (num) => {
    if (num < 2) {
      return 'no';
    }
    let count = 0;
    for (let i = 1; i <= Math.round(num / 2); i += 1) {
      if (num % i === 0) {
        count += 1;
      }
    }
    if (count > 1) {
      return 'no';
    }
    return 'yes';
  };

  for (let count = 1; count <= 3; count += 1) {
    const number = randomInt(20);
    const correctAnswer = isPrime(number);
    const answer = inputOut(`Question: ${number} \nYour answer: `);
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default prime;
