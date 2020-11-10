let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

type Person = {
  firstName: string;
  lastName?: string;
};

function createPerson2(firstName: string, lastName?: string): Person {
  return { firstName, lastName };
}

createPerson('Fulano');
createPerson2('Fulano', 'Bezerra');
