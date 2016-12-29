import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button
        className='button expanded'
        ref='button'
      >
        Picture it
      </button>
    )
  }
}

export default Button
