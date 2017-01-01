import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Input from './input'
import Body from './body'
import Header from './header'

import * as actionCreators from '../actions/actionCreators';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body {...this.props} />
      </div>
    )
  }
}

// TODO: should pictures be bound at a lower level?
const mapStateToProps = (state) => ({
  phrase: state.phrase,
  pictures: state.pictures
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
