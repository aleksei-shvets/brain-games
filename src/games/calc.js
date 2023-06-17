import runGame from '../index.js';
import randomInt from '../utils.js';

const answerCalculation = (numOne, operation, numTwo) => {
  switch (operation) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unknown operator: '${operation}'!`);
  }
};

const getRoundData = () => {
  const firstNumber = randomInt(0, 10);
  const secondNumber = randomInt(0, 10);
  const operatorsList = ['+', '-', '*'];
  const indexOfOperatorList = randomInt(0, operatorsList.length);
  const operator = operatorsList[indexOfOperatorList];
  const correctAnswer = String(answerCalculation(firstNumber, operator, secondNumber));

  const questionLine = `${firstNumber} ${operator} ${secondNumber}`;

  return [questionLine, correctAnswer];
};

const rules = 'What is the result of the expression?';

export default () => {
  runGame(getRoundData, rules);
};
