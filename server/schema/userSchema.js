const graphql = require('graphql');
const Staff = require("../model/user");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;


const UserType = new GraphQLObjectType({
  name: "staff",
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return Staff.find(args.username);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return Staff.find({})
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        let staff = new Staff({
          firstname: args.firstname,
          lastname: args.lastname,
          username: args.username,
          email: args.email,
          password: args.password
        });
        return staff.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});