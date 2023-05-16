import { inputOut, randomInt, greetingInStart } from './index.js';

const userName = greetingInStart();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const even = () => {
  for (let count = 1; count <= 3; count += 1) {
    const question = randomInt(100);
    const answer = inputOut(`Question: ${question}\nYour answer: `);
    let correctAnswer;
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default even;
