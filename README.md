## Apollo GraphQL Server with MongoDB

This TodoApp Implements CRUD operations using Apollo GraphQL Query and Mutations.

Here's the Front-End for this App:
- [React TodoApp](https://github.com/AbdulHadi404/React-TodoApp)


### Query and Mutations:

#### Create Todo
```gql
mutation CreateTodo($createTodoTodoInput: TodoInput){
  createTodo (todoInput: $createTodoTodoInput){
      id
      content
      title
    }
  }
}
```

#### Get Todos
```gql
query GetTodos{
   todos {
     id
     title
     content
   }
}
```

#### Update Todo
```gql
mutation UpdateTodo($updateTodoId: ID!, $updateTodoTodoInput: TodoInput){
  updateTodo(id: $updateTodoId,todoInput: $updateTodoTodoInput) {
    content
    id
    title
  }
}
```

#### Delete Todo
```gql
mutation DeleteTodo($deleteTodoId: ID!){
deleteTodo(id: $deleteTodoId) {
  id
  title
  content
}
}
```
