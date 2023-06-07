import { inputOut, greetingInStart } from './utils.js';

const interactivOfGame = (logicGenerator, rules) => {
  const userName = greetingInStart();

  console.log(rules);

  const startCountGame = 1;
  const endCountGame = 3;
  for (let gameCount = startCountGame; gameCount <= endCountGame; gameCount += 1) {
    const logic = logicGenerator();
    const [questionLine, correctAnswer] = logic;
    const answer = inputOut(`Question: ${questionLine} \nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default interactivOfGame;
