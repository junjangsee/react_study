import React from 'react'
import Navbar from './components/navbar'
import GlobalStyles from './design-systems/global-styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from './design-systems'

import HomePage from './pages/home'
import ErrorPage from './pages/error'
import BoxPage from './pages/box'
import Webtoon from './pages/webtoon'
import PokemonPage from './pages/pokemon'
import Todo from './pages/todo'

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyles />
        <Navbar title="Navbar" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/box" component={BoxPage} />
          <Route path="/webtoon" component={Webtoon} />
          <Route path="/pokemon" component={PokemonPage} />
          <Route path="/todo" component={Todo} />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
