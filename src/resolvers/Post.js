const Post = {
  author(parent, args, {db}, info) {
    return db.users.find((user) => {
      return parent.author === user.id
    })
  },
  comments(parent, args, {db}, info) {
    return db.comments.filter((comment) => {
      return comment.post === parent.id
    })
  }
}

export { Post as default }