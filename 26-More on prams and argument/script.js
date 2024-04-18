function registerUser(user) {
  return user + ' is registered';
}
console.log(registerUser('John'));

// 2 method
function registerUser(user) {
  if (!user) {
    user = 'Priya';
  }
  return user + ' is registered';
}
console.log(registerUser());

// 3 method
function registerUser(user = 'Puja') {
  return user + ' is registered';
}
console.log(registerUser());

// Rest Prams
function sum (...numbers) {
  return numbers;
}

console.log(sum(1,2,3));

// 2nd method
function sum (...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1,2,3,4,5,6,100));

// Objects as params
function loginUser(user) {
  return`The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));

console.log(

loginUser({
  id: 2,
  name:'Sara',
})
);

// Arrays as prams
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

