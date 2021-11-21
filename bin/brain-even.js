#!/usr/bin/env node
import runGame, { numOfRounds } from '../src/index.js';
import { isEven, getRandInt } from '../src/utils.js';

const MESSAGE_TASK = 'Answer "yes" if the number is even, otherwise answer "no".';
const isValid = (ans) => ans === 'yes' || ans === 'no';

const questions = [];
const answers = [];
for (let i = 0; i < numOfRounds; i += 1) {
  const num = getRandInt();
  const ans = isEven(num) ? 'yes' : 'no';
  questions.push(num);
  answers.push(ans);
}

runGame(questions, answers, MESSAGE_TASK, isValid);
