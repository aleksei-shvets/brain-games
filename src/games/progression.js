import runGame from '../index.js';
import randomInt from '../utils.js';

const progressionLength = 10;

const progressionStepCreate = () => randomInt(0, 20) - randomInt(0, 20);

const startNumberCreate = () => randomInt(0, 20);

const progressionGeneration = (startNumber, progressionStep) => {
  const sequence = [];
  for (let num = startNumber; sequence.length <= progressionLength; num += progressionStep) {
    sequence.push(num);
  }
  return sequence;
};

const logicFormation = () => {
  const gameSequence = progressionGeneration(startNumberCreate(), progressionStepCreate());
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
