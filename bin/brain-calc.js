#!/usr/bin/env node
import runGame, { numOfRounds } from '../src/index.js';
import { getRandOp, getRandInt } from '../src/utils.js';

const MESSAGE_TASK = 'What is the result of the expression?';
const isInt = (value) => /^-?\d+$/.test(value);

const calc = (n1, n2, op) => {
  if (op === '+') {
    return n1 + n2;
  }
  if (op === '-') {
    return n1 - n2;
  }
  return n1 * n2;
};

const questions = [];
const answers = [];
for (let i = 0; i < numOfRounds; i += 1) {
  const num1 = getRandInt();
  const num2 = getRandInt();
  const op = getRandOp();
  const ans = String(calc(num1, num2, op));
  questions.push(`${num1} ${op} ${num2}`);
  answers.push(ans);
}

runGame(questions, answers, MESSAGE_TASK, isInt);
