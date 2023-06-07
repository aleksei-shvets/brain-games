import startOfGame from '../index.js';
import randomInt from '../utils.js';

const generationCorrectAnswer = (numOne, operation, numTwo) => {
  if (operation === '+') {
    return numOne + numTwo;
  }
  if (operation === '-') {
    return numOne - numTwo;
  }
  return numOne * numTwo;
};

const logic = () => {
  const firstNumber = randomInt(0, 10);
  const secondNumber = randomInt(0, 10);
  const operatorsList = ['+', '-', '*'];
  const indexOfOperatorList = randomInt(0, operatorsList.length);
  const operator = operatorsList[indexOfOperatorList];
  const correctAnswer = String(generationCorrectAnswer(firstNumber, operator, secondNumber));

  const questionLine = `${firstNumber} ${operator} ${secondNumber}`;

  return [questionLine, correctAnswer];
};

const rules = 'What is the result of the expression?';

const calc = () => {
  startOfGame(logic, rules);
};

export default calc;
