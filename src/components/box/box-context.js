import React, { createContext, useContext, useState } from 'react'
import PropType from 'prop-types'
const Context = createContext()

export function BoxProvider({ children }) {
  const [color, setColor] = useState('')

  return (
    <Context.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useBoxContext() {
  return useContext(Context)
}

BoxProvider.propTypes = {
  children: PropType.element,
}
