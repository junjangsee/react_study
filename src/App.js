import React, { useState } from 'react'
import Navbar from './navbar'

// 스타일 컴포넌트
/*
import styled from 'styled-components'

const Div = styled.span`
 border-color=#efefef;
`
 */

// 1. 가장 일반적인 방법
// Class, Funtional 2가지

// Class 2가지 방법
// state -> 내용을 바꾸고 싶으면 state를 통해서 변경
// class App extends React.Component {
//   state = {
//     title: '리액트',
//   }

//   render() {
//     return <div>{this.state.title}</div>
//   }
// }

// class App extends React.Component {
//   state = {
//     title: '리액트',
//   }

//   render() {
//     return <div>{this.state.title}</div>
//   }
// }

// export default App

// Funtional Hook으로 state를 가질 수 있다.
// state -> 내가 가진 값
// props -> 누군가 던진 값
function App() {
  // [값, 값을 변화시키는 함수] = useState(기본 값)
  const [title, setTitle] = useState('App 페이지의 Navbar')

  return (
    <div>
      <Navbar title={title} />
    </div>
  )
}

export default App
