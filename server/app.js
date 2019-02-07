require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./graphql/schema')
const rootValue = require('./graphql/resolvers')

const { SubscriptionServer } = require('subscriptions-transport-ws')
const { execute, subscribe } = require('graphql')

const isAuth = require('./middleware/isAuth')

require('./passport')

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

app.get('/test', isAuth, (req, res, next) => {
  return res.json({
    message: 'Hey'
  })
})

const uris = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true`

const options = {
  useNewUrlParser: true
}

mongoose.connect(uris, options)
  .then(() => {
    return app.listen(process.env.PORT)
  })
  .then(server => {
    SubscriptionServer.create({
      schema,
      execute,
      subscribe
    },
    {
      server: server,
      path: '/graphql'
    })
  })
  .catch(err => {
    console.error(err)
    throw new Error('DB connection failed')
  })