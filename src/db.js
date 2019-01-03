
const users = [{
  id: '1',
  name: 'fizz',
  email: 'fizzbuzz@gmail.com',
  age: 27,
}, {
  id: '2',
  name: 'buzz',
  email: 'buzzbuzz@gmail.com',
  age: 23,
} , { 
  id: '3',
  name: 'Foo',
  email: 'foobar@gmail.com',
  age: 33,
}
]

const comments = [{
  id: '100',
  text: 'yo',
  author: '1',
  post: '1',
}, {
  id: '101',
  text: 'fizzbuzz',
  author: '1',
  post: '1',
}, {
  id: '102',
  text: 'Are we out of eggnog already',
  author: '2',
  post: '3',
}, {
  id: '103',
  text: 'there must be a mistake',
  author: '3',
  post: '2',
},
]

const posts = [{
  id: '1',
  title: 'Practical Applications for Bacon',
  author: '3',
  published: true,
},{
  id: '2',
  title: 'What is That Smell? and Other Bedtime Stories',
  author: '2',
  published: false,
},{ 
  id: '3',
  title: 'Liquidity 101',
  author: '1',
  published: false,
},{ 
  id: '4',
  title: 'Moonboot Promenade',
  author: '3',
  published: true,
}]

const db = {
  posts,
  comments,
  users
}

export default db