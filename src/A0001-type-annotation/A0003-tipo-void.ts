function semRetorno(...args: string[]): void {
  console.log(...args);
}

const pessoa = {
  name: 'Fulano',
  sobrenome: 'Batista',
  exibirName(): void {
    console.log(this.name + ' ' + this.sobrenome);
  },
};

semRetorno('carlos', 'fulano', 'ciclano');
pessoa.exibirName();

export { pessoa };
