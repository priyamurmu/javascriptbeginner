
// let x1 ;
// const todo1 = new Object ();
// todo1.id = 1;
// x1 = todo;

// console.log(x1);

let x ;
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false; 
x = todo;

console.log(x);

const person = {
  address: {
    coords:{
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x2 = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3,d: 4};
const obj3 = {...obj1, ...obj2};

x2 = obj3;
console.log(x2);

const todos = [
  {id: 1, name: 'Buy Milk'},
  { id: 2, name: 'Pickup kids from school'},
  { id: 3, name: 'Take out trash'},
];

x = todos[1].name;
x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty('name');
console.log(x);





