import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
        type='text'
        placeholder={this.props.placeholder}
        onChange={(e) => {
          this.props.onChange(e);
        }}
      />
    )
  }
}

export default Input
