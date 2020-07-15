const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/userSchema');
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = 5000;

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});