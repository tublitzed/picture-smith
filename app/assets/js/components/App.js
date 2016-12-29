import React from 'react'
import { connect } from 'react-redux'
import Input from './input'
import Body from './body'
import Header from './header'

const App = ({ store, dispatch }) => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

const mapStateToProps = (state) => ({
  phrase: state.phrase
});

export default connect(mapStateToProps)(App)
