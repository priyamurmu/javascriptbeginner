const people = [
  {
    firstName:'Priya',
    lastName: 'Murmu',
    email:'priyamurmu@gmail.com',
    phone: '9304416887',
    age:23,
  },
  {
    firstName:'John',
    lastName: 'Hembrom',
    email:'johnhembrom@gmail.com',
    phone: '9122321320',
    age:18,
  },
  {
    firstName:'eresa',
    lastName: 'Marandi',
    email:'eresamarandi@gmail.com',
    phone: '9430316887',
    age:25,
  },
  {
    firstName:'Puja',
    lastName: 'Murmu',
    email:'pujamurmu@gmail.com',
    phone: '9304418967',
    age:34,
  },
  {
    firstName:'Riya',
    lastName: 'Soren',
    email:'riyasoren@gmail.com',
    phone: '9308756887',
    age:30,
  },
];

const youngPeople = people.filter((person) =>
person.age <= 25)
.map((person) => ({
  name: person.firstName + ' ' + person.lastName,
  email: person.email,
}));

console.log(youngPeople);

// Challenge 2

const numbers =  [2,-30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter((number) => number > 0)
.reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);

// Challenge 3

const words = ['coder', 'programmer', 'developer'];

const cwords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cwords);





