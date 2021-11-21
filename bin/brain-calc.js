#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { getRandOp, getRandInt } from '../src/logic.js';

const SUCCESS = 'success';
const FAIL = 'fail';

const name = greetings();

console.log('What is the result of the expression?');

const numOfRounds = 3;
let currentRound = 1;
let state = SUCCESS;

const calc = (n1, n2, op) => {
  if (op === '+') {
    return n1 + n2;
  }
  if (op === '-') {
    return n1 - n2;
  }
  return n1 * n2;
};

const isInt = (value) => /^-?\d+$/.test(value);

const runRound = () => {
  let result = FAIL;
  const num1 = getRandInt();
  const num2 = getRandInt();
  const op = getRandOp();
  const correctAns = String(calc(num1, num2, op));
  console.log(`Question: ${num1} ${op} ${num2}`);
  const rawAns = readlineSync.question('Your answer: ').trim();
  if (isInt(rawAns)) {
    result = (rawAns === correctAns) ? SUCCESS : FAIL;
  }
  if (result === SUCCESS) {
    console.log('Correct!');
  } else {
    console.log(`'${rawAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
  }
  return result;
};

while (currentRound <= numOfRounds && state === SUCCESS) {
  state = runRound();
  currentRound += 1;
}

if (state === SUCCESS) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
