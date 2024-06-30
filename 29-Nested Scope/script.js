function first () {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x+y);
  }

  second();
}
first();

if (true) {
  const a = 500;

  if (a== 500){
    const b = 300;
    console.log(a+b);
  }
}