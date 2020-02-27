import React, { createContext, useContext, useState, useReducer } from 'react'
import PropType from 'prop-types'
const Context = createContext()

export const ACTION_TYPES = {
  SET_TODO: 'SET_TODO',
}

/**
 * 실제 데이터 변화가 일어나는곳
 */
function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_TODO: {
      return { ...state, todos: action.payload }
    }
  }
}

export function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    filtedList: [],
  })

  const actions = {
    setTodos: (payload) =>
      dispatch({
        type: ACTION_TYPES.SET_TODO,
        payload,
      }),
  }

  return (
    <Context.Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useTodoContext() {
  return useContext(Context)
}

TodoContextProvider.propTypes = {
  children: PropType.element,
}
