function showMessage(...args: string[]) {
  return [...args];
}

type ShowMessage = {
  (...args: string[]): string[];
};

const showMessage2: ShowMessage = (...args) => [...args];
// const showMessage2: (...args: string[]) => string[] = (...args) => [...args];

console.log(showMessage('carlos', 'fulano', 'ciclano'));
console.log(showMessage2('carlos', 'fulano', 'ciclano'));
