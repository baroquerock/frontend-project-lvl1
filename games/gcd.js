import runGame, { numOfRounds } from '../src/index.js';
import { gcd, getRandInt } from '../src/utils.js';

const MESSAGE_TASK = 'Find the greatest common divisor of given numbers.';
const isInt = (value) => /^-?\d+$/.test(value);

const play = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const num1 = getRandInt();
    const num2 = getRandInt();
    const ans = String(gcd(num1, num2));
    questions.push(`${num1} ${num2}`);
    answers.push(ans);
  }

  runGame(questions, answers, MESSAGE_TASK, isInt);
};

export default play;
