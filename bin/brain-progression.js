#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { getRandInt } from '../src/logic.js';

const SUCCESS = 'success';
const FAIL = 'fail';

const name = greetings();

console.log('What number is missing in the progression?');

const numOfRounds = 3;
let currentRound = 1;
let state = SUCCESS;

const isInt = (value) => /^-?\d+$/.test(value);

const runRound = () => {
  let result = FAIL;
  // change magic nums
  const first = getRandInt();
  const len = getRandInt(5, 10);
  const idx = getRandInt(1, len);
  const step = getRandInt(1, 5);
  const correctAns = String(first + (idx - 1) * step);
  const progression = [];
  for (let i = 0; i < len; i += 1) {
    if (i === idx - 1) {
      progression.push('..');
    } else {
      progression.push(String(first + i * step));
    }
  }
  console.log(`Question: ${progression.join(' ')}`);
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
