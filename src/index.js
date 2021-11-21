import readlineSync from 'readline-sync';
import { greetings } from './utils.js';

const SUCCESS = 'success';
const FAIL = 'fail';
const numOfRounds = 3;

const runRound = (question, correctAns, isValid) => {
  let result = FAIL;
  console.log(`Question: ${question}`);
  const rawAns = readlineSync.question('Your answer: ').trim();
  if (isValid(rawAns)) {
    result = (rawAns === correctAns) ? SUCCESS : FAIL;
  }
  if (result === SUCCESS) {
    console.log('Correct!');
  } else {
    console.log(`'${rawAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
  }
  return result;
};

const runGame = (questions, answers, message, isValid) => {
  const name = greetings(message);
  let curRound = 1;
  let state = SUCCESS;

  while (curRound <= numOfRounds && state === SUCCESS) {
    state = runRound(questions[curRound - 1], answers[curRound - 1], isValid);
    curRound += 1;
  }

  if (state === SUCCESS) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runGame;
export { numOfRounds };
