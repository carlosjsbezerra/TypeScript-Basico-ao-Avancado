type calculatorFn = (x: number, y: number) => number;

const add: calculatorFn = (x, y) => x + y;
const sub: calculatorFn = (x, y) => x - y;
const mul: calculatorFn = (x, y) => x * y;
const div: calculatorFn = (x, y) => x / y;

const twoPlusTwo = add(2, 2); // 4
const twoMinusTwo = sub(2, 2); // 0
const twoTimesTwo = mul(2, 2); // 4
const twoDividedByTwo = div(2, 2); // 1

type ProgrammingLanguage = 'Python' | 'JavaScript' | 'TypeScript';

const sayFavoriteProgrammingLanguage = (language: ProgrammingLanguage) =>
  `You like ${language}!`;

const favoriteLanguage = sayFavoriteProgrammingLanguage('Python');
