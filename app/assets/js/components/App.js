import React from 'react'
import { connect } from 'react-redux'
import Input from './input'
import Body from './body'
import Header from './header'

const App = ({ dispatch }) => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default connect()(App)
