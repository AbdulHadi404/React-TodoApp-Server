const Todo = require('../model/todo')

const resolvers = {
    Query: {
        todos: async () => { return await Todo.find({}) },
        todo: async (parent, args) => { return await Todo.findById(args.id) }
    },
    Mutation: {
        createTodo: async (parent, args) => {
            let todo = new Todo(args.todoInput)
            return await todo.save()
        },
        updateTodo: async (parent, args) => {
            return await Todo.findByIdAndUpdate(args.id, args.todoInput, { new: true })
        },
        deleteTodo: async (parent, args) => {
            return await Todo.findByIdAndDelete(args.id)
        }
    }
}

module.exports = resolvers