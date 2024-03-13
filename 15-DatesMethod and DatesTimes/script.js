let x ;
 let d = new Date();
 x = d.toString();

 console.log(x);

 let x1 ;
 let d1 = new Date('2023/04/12');
 x1 = d1.getFullYear();
//  without writing new date ns will be 2024
 console.log(x1);

 let x2 ;
 let d2 = new Date('2024/03/15');
 x2 = d2.getMonth() + 1;
 
 console.log(x2);

 let x3 ;
 let d3 = new Date();
 x3 = d3.getDay();
 
 console.log(x3);

 let x4 ;
 let d4 = new Date();
 x4 = d4.getHours();
 
 console.log(x4);

 let x5 ;
 let d5 = new Date();
 x5 = d5.getMinutes();
 
 console.log(x5);

 let x6 ;
 let d6 = new Date();
 x6 = d6.getSeconds();
 
 console.log(x6);

 let x7 ;
 let d7 = new Date();
 x7 = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
 
 console.log(x7);

 let x8 ;
 let d8 = new Date();
 x8 = Intl.DateTimeFormat('en-US').format(d);
 
 console.log(x8);

 let x9 ;
 let d9 = new Date();
 x9 = Intl.DateTimeFormat('en-GB').format(d);
 
 console.log(x9);

 let y;
 let d10 = new Date();
 y = Intl.DateTimeFormat('default').format(d);
 
 console.log(y);

 let y1;
 let d11 = new Date();
 y1 = Intl.DateTimeFormat('default',{ month: 'long' }).format(d);
 
 console.log(y1);

 let y2 ;
 let d12 = new Date();
 y2= d12.toLocaleString('default', {month:'short'});
 
 console.log(y2);

 let y3 ;
 let d13 = new Date();
 y3 = d13.toLocaleString('default',{weekday:'long',
 year:'numeric',
 month:'long',
 day:'numeric',
 hour:'numeric',
 minute:'numeric',
 second:'numeric',
 timezone:'Asia/Kolkata'
});
 
 console.log(y3);