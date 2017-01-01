import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button
        className={'button '  + (this.props.cssClass ? this.props.cssClass : '')}
        onClick={this.props.onClick}
        type={this.props.type || 'button'}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button
