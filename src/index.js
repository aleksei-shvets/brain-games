import * as readlineSync from 'readline-sync';

const inputOut = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const randomInt = (increase) => Math.floor(Math.random() * increase + 1);

const randomArreyIndex = (arr) => Math.floor(Math.random() * arr.length);

const greetingInStart = () => {
  console.log('Welcome to the Brain Games!');
  const user = inputOut('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

const interactivOfGame = (logicGenerator, userName) => {
  for (let count = 1; count <= 3; count += 1) {
    const logic = logicGenerator();
    const questionLine = logic[0];
    const correctAnswer = logic[1];
    const answer = inputOut(`Question: ${questionLine} \nYour answer: `);
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

export {
  inputOut, randomInt, greetingInStart, randomArreyIndex,
  interactivOfGame,
};
