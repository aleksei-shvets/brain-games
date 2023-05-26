import {
  inputOut, randomInt, greetingInStart, randomArreyIndex,
} from '../src/index.js';

const progressionGenerator = () => {
  const progressionStep = randomInt(10) + 2 - randomInt(8);
  const startNamber = randomInt(10);
  const sequence = [];
  for (let num = startNamber; sequence.length <= 10; num += progressionStep) {
    sequence.push(num);
  }
  return sequence;
};

const progression = () => {
  const userName = greetingInStart();
  console.log('What number is missing in the progression?');
  for (let count = 1; count <= 3; count += 1) {
    const gameSequence = progressionGenerator();
    const missingNumderIndex = randomArreyIndex(gameSequence);
    const correctAnswer = gameSequence[missingNumderIndex];
    gameSequence[missingNumderIndex] = '..';
    const answer = inputOut(`Question: ${gameSequence} \nYour answer: `);
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

export default progression;
