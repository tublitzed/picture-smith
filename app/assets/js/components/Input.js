import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
        type='text'
        ref='input'
        placeholder='Type a phrase here...'
      />
    )
  }
}

export default Input
