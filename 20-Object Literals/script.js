const person =  {
  name: 'John Doe',
  age: 32,
  isAdmin: true,
};

console.log(person);

let x;
const person1 =  {
  name: 'John Doe',
  age: 32,
  isAdmin: true,
  address: {
    street:'123 main street',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music','sports']
};
x = person1.name;
x = person1['age'];
x = person1.address.state;
x = person1.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;
delete person.age;
person.hasChildren = true;

person.greet = function() {
  console.log(`Hello, My name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'priya',
  'last name': 'murmu',
};
x = person2['first name'];


console.log(x);




