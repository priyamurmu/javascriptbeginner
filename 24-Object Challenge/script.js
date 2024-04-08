// step 1

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gate',
    status:{
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: 'Steve Jobs',
    author: 'Walter Issacson',
    status:{
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: 'Mackinglay',
    author: 'Suzzaine Colline',
    status:{
      own: true,
      reading: false,
      read: false,
    },
  },
];

// step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// step 3
const { title: firstbook } = library[0];

console.log(firstbook);

// step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);