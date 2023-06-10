import * as readlineSync from 'readline-sync';

const roundsCount = 3;

export default (logicGenerator, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [questionLine, correctAnswer] = logicGenerator();
    const answer = readlineSync.question(`Question: ${questionLine} \nYour answer: `);
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
