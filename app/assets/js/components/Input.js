import React from 'react'
import ReactDOM from 'react-dom'

class Input extends React.Component {
  componentDidMount(){
    if (this.props.autoFocus) {
      this.refs.input.focus();
    }
  }
  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={(e) => {
          this.props.onChange(e);
        }}
        value={this.props.value}
        ref='input'
      />
    )
  }
}

export default Input
