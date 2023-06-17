import runGame from '../index.js';
import randomInt from '../utils.js';

const progressionLength = 10;

const generateProgression = (firstNum, step) => {
  const sequence = [];
  for (let num = firstNum; sequence.length <= progressionLength; num += step) {
    sequence.push(num);
  }
  return sequence;
};

const logicFormation = () => {
  const progressionStep = randomInt(0, 20) - randomInt(0, 20);
  const startNumber = randomInt(0, 20);
  const gameSequence = generateProgression(startNumber, progressionStep);
  const missingNumderIndex = randomInt(0, gameSequence.length);
  const correctAnswer = String(gameSequence[missingNumderIndex]);
  gameSequence[missingNumderIndex] = '..';
  const questionLine = gameSequence.join(' ');

  return [questionLine, correctAnswer];
};

const rules = 'What number is missing in the progression?';

export default () => {
  runGame(logicFormation, rules);
};
