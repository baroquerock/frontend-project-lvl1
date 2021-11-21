const isEven = (n) => n % 2 === 0;

const getRandInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export { isEven, getRandInt };
