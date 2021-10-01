## Apllo Gql Server with MongoDB

Query and Mutations:

``js
mutation CreateTodo($createTodoTodoInput: TodoInput){
  createTodo (todoInput: $createTodoTodoInput){
      id
      content
      title
    }
  }
}
``

query GetTodos{
   todos {
     id
     title
     content
   }
}

mutation UpdateTodo($updateTodoId: ID!, $updateTodoTodoInput: TodoInput){
  updateTodo(id: $updateTodoId,todoInput: $updateTodoTodoInput) {
    content
    id
    title
  }
}

mutation DeleteTodo($deleteTodoId: ID!){
deleteTodo(id: $deleteTodoId) {
  id
  title
  content
}
}