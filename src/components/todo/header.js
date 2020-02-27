import React, { useState } from 'react'
import { Container } from '../../design-systems'
import { saveTodo } from '../../services/todo'
import { useTodoContext } from './todo-context'

function Header() {
  const [text, setText] = useState('')
  const {
    state: { todos },
    actions: { setTodos },
  } = useTodoContext()

  const handleText = (e) => {
    setText(e.target.value)
  }
  const handleEnter = async (e) => {
    if (text && e.keyCode === 13) {
      const newTodo = await saveTodo({
        title: text,
        isDone: false,
      })

      if (!newTodo) {
        alert('추가 실패 !')
      }

      setTodos([...todos, newTodo])
      setText('')
    }
  }

  return (
    <Container>
      <input value={text} onChange={handleText} onKeyUp={handleEnter} />
    </Container>
  )
}

export default Header
