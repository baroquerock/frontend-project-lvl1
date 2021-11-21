#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { isPrime, getRandInt } from '../src/logic.js';

const SUCCESS = 'success';
const FAIL = 'fail';

const name = greetings();

console.log('Answer "yes" if given number is prime, otherwise answer "no".');

const numOfRounds = 3;
let currentRound = 1;
let state = SUCCESS;

const isValid = (ans) => ans === 'yes' || ans === 'no';

const runRound = () => {
  let result = FAIL;
  const num = getRandInt();
  const correctAns = isPrime(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
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

while (currentRound <= numOfRounds && state === SUCCESS) {
  state = runRound();
  currentRound += 1;
}

if (state === SUCCESS) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
