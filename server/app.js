require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const graphqlSchema = require('./graphql/schema')
const graphqlRoot = require('./graphql/resolvers')

const isAuth = require('./middleware/isAuth')

require('./passport')

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlRoot,
  graphiql: true,
  formatError(err) {
    return {
      message: err.message
    }
  }
}))

const uris = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true`

const options = {
  useNewUrlParser: true
}

mongoose.connect(uris, options)
  .then(() => {
    app.listen(process.env.PORT)
  })
  .catch(err => {
    console.error(err)
    throw new Error('DB connection failed')
  })