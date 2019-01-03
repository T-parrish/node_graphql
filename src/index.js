import { GraphQLServer } from 'graphql-yoga'; 

import db from './db';

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Comment from './resolvers/Comment'
import Post from './resolvers/Post'

const server = new GraphQLServer({
  typeDefs : './src/schema.graphql',
  resolvers : {
    Query,
    Mutation,
    User,
    Comment,
    Post
  },
  
  // passes the context to all / any resolvers
  context: {
    db
  }
})

server.start(() => {
  console.log('The server is up')
})