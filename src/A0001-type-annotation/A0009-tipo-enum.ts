enum Cores {
  vermelho, // 0
  azul = 100, // 1
  amarelo, // 2
}

enum Cores {
  roxo = 'roxo',
  verde = 201,
  rosa,
}

console.log(Cores);
console.log(Cores[0]);
console.log(Cores.azul);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.verde);
