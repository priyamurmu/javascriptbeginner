// this values are stored on  the stack
const name = "john";
const age = 31;

// reference values are stored on the heap
const person = {
  name:"brad",
  age: 40
}

let newName = name;
newName = 'jonathan'

let newPerson = person;
newPerson.name = 'priya';
+6

console.log(name,newName);
console.log(person,newPerson);