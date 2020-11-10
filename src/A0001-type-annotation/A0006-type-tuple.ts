// tuple
const dadosCliente1: readonly [number, string] = [1, 'Carlos'];
const dadosCliente2: [number, string, string?] = [1, 'Carlos', 'Bezerra'];
const dadosCliente3: [number, string, string?] = [1, 'Carlos'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Carlos', 'Beltrano'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Fulano';
// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Fulano', 'Bletrano', 'Ciclano'];
const array2: ReadonlyArray<string> = ['Fulano', 'Bletrano', 'Ciclano'];

console.log(array1);
console.log(array2);
