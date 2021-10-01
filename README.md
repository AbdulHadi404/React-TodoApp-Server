## Apllo Gql Server with MongoDB

Query and Mutations:

### Create Todo
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

### Get Todos
```gql
query GetTodos{
   todos {
     id
     title
     content
   }
}
```

### Update Todo
```gql
mutation UpdateTodo($updateTodoId: ID!, $updateTodoTodoInput: TodoInput){
  updateTodo(id: $updateTodoId,todoInput: $updateTodoTodoInput) {
    content
    id
    title
  }
}
```

### Delete Todo
```gql
mutation DeleteTodo($deleteTodoId: ID!){
deleteTodo(id: $deleteTodoId) {
  id
  title
  content
}
}
```