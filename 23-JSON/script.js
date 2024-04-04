const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON String
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the Body',
  },
  {
    id1: 1,
    title1: 'Post One',
    body1: 'This is the body',

  }
];

const str2 = JSON.stringify(posts);


console.log(str2);