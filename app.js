import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './Nav'
import Intro from './Intro'
import Vote from './Vote'
import Deadlines from './Deadlines'

const App = () => {
  return (
    <div>
      <Intro/>
      <Nav/>
      <Vote/>
      <Deadlines/>
    </div>
  )
}

const domContainer = document.querySelector('#react-app')
ReactDOM.render(<App />, domContainer)
