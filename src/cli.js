import * as readlineSync from 'readline-sync';

const inputOut = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export default inputOut;
