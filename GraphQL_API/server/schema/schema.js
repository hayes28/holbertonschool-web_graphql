const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    }
});

module.exports = { TaskType };
