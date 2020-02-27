// http: GET, POST, PUT, DELETE
// GET = 가져 올 때
// POST = 서버로 무언가를 요청 할 때
// PUT = 서버로 무언가를 요청하는데 + 수정
// DELETE = 무언가를 삭제 할 때

/**
 * @GET
 * Todo 목록을 가져온다
 */
export async function fetchTodos() {
  const response = await fetch('http://localhost:3000/todos')

  if (!response.ok) {
    return []
  }
  return response.json()
}

/**
 * @PUT
 * 선택된 Todo 의 값을 업데이트한다
 * return boolean
 */
export async function updateTodo(payload) {
  const { id } = payload

  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

/**
 * @DELETE
 * 선택된 Todo 의 값을 삭제한다
 * return boolean
 */
export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.ok
}

/**
 * @POST
 * 선택된 Todo 의 값을 저장
 * return boolean
 */
export async function saveTodo(payload) {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    return null
  }

  return response.json()
}
