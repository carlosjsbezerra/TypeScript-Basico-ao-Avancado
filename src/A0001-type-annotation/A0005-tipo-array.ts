// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function cancatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3, 4);
const concatena = cancatenaString('1', '2', '3', '4');
const upper = toUpperCase('1', '2', '3', '4');

console.log(result);
console.log(concatena);
console.log(upper);
