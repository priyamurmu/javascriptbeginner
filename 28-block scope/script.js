const x = 100;

if (true) {
  const y = 200;
  console.log(x+y);
}


for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// var is not block scope

if (true) {
  var c = 700;
}

console.log(c);

function run () {
  var d = 100;
  console.log(d);
}

run();

