#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { gcd, getRandInt } from '../src/logic.js';

const SUCCESS = 'success';
const FAIL = 'fail';

const name = greetings();

console.log('Find the greatest common divisor of given numbers.');

const numOfRounds = 3;
let currentRound = 1;
let state = SUCCESS;

const isInt = (value) => /^-?\d+$/.test(value);

const runRound = () => {
  let result = FAIL;
  const num1 = getRandInt();
  const num2 = getRandInt();
  const correctAns = String(gcd(num1, num2));
  console.log(`Question: ${num1} ${num2}`);
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
