import { interactivOfGame, randomInt, greetingInStart } from '../index.js';

const generationCorrectAnswer = (num) => {
  let answer;
  if (num % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

const logic = () => {
  const questionLine = randomInt(100);
  const correctAnswer = generationCorrectAnswer(questionLine);
  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  interactivOfGame(logic, rules);
};

export default even;
