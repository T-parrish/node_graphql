const Query = {
  me() {
    return {
      id: 123098,
      name: 'Mike',
      email: 'mike@gmail.com',
      age: 28
    }
  },
  post() {
    return {
      id: 123544,
      title: 'Graphql for noobs',
      author: 'loop zoop',
      published: false
    }
  },
  users(parent, args, {db}, info) {
    if (args.query) {
      return db.users.filter((user) => {
        return user.name.includes(args.query.toLowerCase())
      })
    } else { 
      return db.users
    }
  },
  posts(parent, args, {db}, info) {
    if (args.query) {
      return db.posts.filter((post) => {
        return post.title.toLowerCase().includes(args.query.toLowerCase()) || 
        post.author.toLowerCase().includes(args.query.toLowerCase())
      })
    } else {
      return db.posts
    }
  },
  comments(parent, args, {db}, info) {
    if (args.query) {
      return db.comments.filter((comment) => {
        return comment.title.toLowerCase().includes(args.query.toLowerCase()) || 
        comment.author.toLowerCase().includes(args.query.toLowerCase())
      })
    } else {
      return db.comments
    }
  }
}

export { Query as default }