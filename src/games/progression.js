import startOfGame from '../index.js';
import randomInt from '../utils.js';

const progressionLength = 10;

const progressionGenerator = () => {
  const progressionStep = randomInt(0, 20) - randomInt(0, 20);
  const startNamber = randomInt(0, 20);
  const sequence = [];
  for (let num = startNamber; sequence.length <= progressionLength; num += progressionStep) {
    sequence.push(num);
  }
  return sequence;
};

const logic = () => {
  const gameSequence = progressionGenerator();
  const missingNumderIndex = randomInt(0, gameSequence.length);
  const correctAnswer = String(gameSequence[missingNumderIndex]);
  gameSequence[missingNumderIndex] = '..';
  const questionLine = gameSequence.join(' ');

  return [questionLine, correctAnswer];
};

const rules = 'What number is missing in the progression?';

export default () => {
  startOfGame(logic, rules);
};
