import {
  inputOut, randomInt, greetingInStart, randomArreyIndex,
} from '../src/index.js';

const userName = greetingInStart();
console.log('What is the result of the expression?');

const calc = () => {
  for (let count = 1; count <= 3; count += 1) {
    const firstNumber = randomInt(10);
    const secondNumber = randomInt(10);
    const operatorsList = ['+', '-', '*'];
    const indexOfOperatorList = randomArreyIndex(operatorsList);
    const operator = operatorsList[indexOfOperatorList];
    let expression;
    switch (operator) {
      case '+':
        expression = firstNumber + secondNumber;
        break;
      case '-':
        expression = firstNumber - secondNumber;
        break;
      case '*':
        expression = firstNumber * secondNumber;
        break;
      default:
        break;
    }
    const questionLine = `${firstNumber} ${operator} ${secondNumber}`;
    const answer = inputOut(`Question: ${questionLine} \nYour answer: `);
    if (answer === String(expression)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expression}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
