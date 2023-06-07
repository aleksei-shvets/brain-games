import interactivOfGame from '../index.js';
import randomInt from '../utils.js';

const generationCorrectAnswer = (numOne, operation, numTwo) => {
  let answer;
  switch (operation) {
    case '+':
      return String(numOne + numTwo);
    case '-':
      return String(numOne - numTwo);
    case '*':
      return String(numOne * numTwo);
    default:
      break;
  }
  return answer;
};

const logic = () => {
  const firstNumber = randomInt(0, 10);
  const secondNumber = randomInt(0, 10);
  const operatorsList = ['+', '-', '*'];
  const indexOfOperatorList = randomInt(operatorsList.length);
  const operator = operatorsList[indexOfOperatorList];
  const correctAnswer = generationCorrectAnswer(firstNumber, operator, secondNumber);

  const questionLine = `${firstNumber} ${operator} ${secondNumber}`;

  return [questionLine, correctAnswer];
};

const rules = 'What is the result of the expression?';

const calc = () => {
  interactivOfGame(logic, rules);
};

export default calc;
