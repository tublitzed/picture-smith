import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={(e) => {
          this.props.onChange(e);
        }}
        value={this.props.value}
      />
    )
  }
}

export default Input
