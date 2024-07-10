const d = new Date(10, 30, 2024, 7, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour< 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If

if (hour< 12) {
  console.log('Good Morning');

  if (hour === 6){
    consolr.log('Wake Up');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  
  if (hour >= 20) {
    console.log('zzzzz');
  }
}

if  (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 && hour === 20) {
  console.log('Brush your teeth');
}