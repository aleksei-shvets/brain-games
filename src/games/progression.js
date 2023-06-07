import startOfGame from '../index.js';
import randomInt from '../utils.js';

const progressionGenerator = () => {
  const progressionStep = randomInt(0, 20) - randomInt(0, 20);
  const startNamber = randomInt(0, 20);
  const sequence = [];
  const sequenceItemsCount = 10;
  for (let num = startNamber; sequence.length <= sequenceItemsCount; num += progressionStep) {
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
  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const rules = 'What number is missing in the progression?';

const progression = () => {
  startOfGame(logic, rules);
};

export default progression;
