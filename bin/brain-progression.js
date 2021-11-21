#!/usr/bin/env node
import runGame, { numOfRounds } from '../src/index.js';
import { getRandInt } from '../src/utils.js';

const MESSAGE_TASK = 'What number is missing in the progression?';
const isInt = (value) => /^-?\d+$/.test(value);

const getProgression = () => {
  const first = getRandInt();
  const len = getRandInt(5, 10);
  const step = getRandInt(1, 10);
  const progression = [];
  for (let i = 0; i < len; i += 1) {
    progression.push(String(first + i * step));
  }
  return progression;
};

const questions = [];
const answers = [];
for (let i = 0; i < numOfRounds; i += 1) {
  const progression = getProgression();
  const idx = getRandInt(0, progression.length - 1);
  const ans = progression[idx];
  progression[idx] = '..';
  questions.push(progression.join(' '));
  answers.push(ans);
}

runGame(questions, answers, MESSAGE_TASK, isInt);
