import React from 'react'
import Todo from '../components/todo'
import { TodoContextProvider } from '../components/todo/todo-context'

function TodoPage() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  )
}

export default TodoPage
