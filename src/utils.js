import readlineSync from 'readline-sync';

const isEven = (n) => n % 2 === 0;

const getRandInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandOp = () => {
  const ops = ['+', '-', '*'];
  return ops[Math.floor(Math.random() * ops.length)];
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const greetings = (message) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (message !== undefined) {
    console.log(message);
  }
  return name;
};

export {
  isEven, getRandInt, getRandOp, gcd, isPrime, greetings,
};
