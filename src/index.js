import * as readlineSync from 'readline-sync';

const inputOut = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export const randomInt = (max) => Math.floor(Math.random() * (max - 1) + 1);

export const greetingInStart = () => {
  console.log('Welcome to the Brain Games!');
  const user = inputOut('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export const interactivOfGame = (logicGenerator, userName) => {
  const startCountGame = 1;
  const endCountGame = 3;
  for (let gameCount = startCountGame; gameCount <= endCountGame; gameCount += 1) {
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
