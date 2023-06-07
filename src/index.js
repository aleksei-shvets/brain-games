import * as readlineSync from 'readline-sync';

const finishRoudOfGame = 3;

const startOfGame = (logicGenerator, rules) => {
  const inputOut = (question) => {
    const answer = readlineSync.question(question);
    return answer;
  };

  const greetingInStart = () => {
    console.log('Welcome to the Brain Games!');
    const user = inputOut('May I have your name? ');
    console.log(`Hello, ${user}!`);
    return user;
  };
  const userName = greetingInStart();

  console.log(rules);

  for (let gameRoundCount = 0; gameRoundCount < finishRoudOfGame; gameRoundCount += 1) {
    const [questionLine, correctAnswer] = logicGenerator();
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

export default startOfGame;
