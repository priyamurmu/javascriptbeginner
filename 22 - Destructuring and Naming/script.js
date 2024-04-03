const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
 age,
};

console.log(person.firstName);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',

};

const{ id, title} = todo;
console.log(id,title);

const todo1 = {
user:{
  name: 'John',
  title2: 'go to sleep.',
  title3: 'Love You $ %....',
},
};
const {
  id1,
  title1,
  user:{name ,title2,title3},
} = todo1;

console.log(name, title2, title3);

// Destructure arrays

const numbers = [23, 34, 43, 64];
const[first, second,...rest] = numbers;
console.log(first,second, rest);


