const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const PORT = 4000
const URL = 'mongodb://localhost:27017/todo'

mongoose.connect(URL)
mongoose.connection.once('open', () => console.log('Database connection is successful'))
mongoose.connection.on('error', () => console.log('Error while connecting to Database'))

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(PORT).then(({ url }) => { `Apollo Server started at ${url}` })