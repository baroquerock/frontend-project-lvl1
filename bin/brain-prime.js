#!/usr/bin/env node
import runGame, { numOfRounds } from '../src/index.js';
import { isPrime, getRandInt } from '../src/utils.js';

const MESSAGE_TASK = 'Answer "yes" if given number is prime, otherwise answer "no".';
const isValid = (ans) => ans === 'yes' || ans === 'no';

const questions = [];
const answers = [];
for (let i = 0; i < numOfRounds; i += 1) {
  const num = getRandInt();
  const ans = isPrime(num) ? 'yes' : 'no';
  questions.push(num);
  answers.push(ans);
}

runGame(questions, answers, MESSAGE_TASK, isValid);
