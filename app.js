const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')
const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')

const bcrypt = require('bcryptjs')

const Event = require('./models/event')

const User = require('./models/user')

const Artikel = require('./models/artikel')

const app = express()
app.use(bodyParser.json())

app.use('/graphql',
 graphqlHTTP({
    schema:graphQlSchema,
    rootValue:graphQlResolvers, 
    graphiql:true
}))
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.l1nzbvq.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
.then(()=>{app.listen(3000)})
.catch(err=>{
    console.log(err)
})
