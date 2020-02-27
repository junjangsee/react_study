import React, { useEffect, useCallback } from 'react'
import { Container } from '../../design-systems'
import { useTodoContext } from './todo-context'
import { fetchTodos, updateTodo, deleteTodo } from '../../services/todo'

function Body() {
  const {
    state: { todos },
    actions: { setTodos },
  } = useTodoContext()

  useEffect(() => {
    async function initalizeTodos() {
      const todos = await fetchTodos()
      setTodos(todos)
    }

    initalizeTodos()
  }, [])

  const handleUpdate = useCallback(
    async (todo) => {
      const updatedTodo = { ...todo, isDone: !todo.isDone }
      const isUpdated = await updateTodo(updatedTodo)

      isUpdated ? setTodos(await fetchTodos()) : alert('업데이트 실패!')
    },
    [updateTodo],
  )

  const handleRemoveTodo = useCallback(
    async (id) => {
      const isRemoved = await deleteTodo(id)

      isRemoved ? setTodos(await fetchTodos()) : alert('삭제 실패!')
    },
    [deleteTodo],
  )

  if (!todos.length) {
    return null
  }

  return (
    <Container>
      {todos.map((todo) => {
        const { title, id, isDone } = todo
        return (
          <Container key={id}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => handleUpdate(todo)}
            />
            <span>{title}</span>
            <button onClick={() => handleRemoveTodo(id)}>삭제</button>
          </Container>
        )
      })}
    </Container>
  )
}

export default Body
