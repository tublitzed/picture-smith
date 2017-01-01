import React from 'react'
import Input from './input'
import Button from './button'
import Picture from './picture'

class Body extends React.Component {
  renderPicture() {
    return (
      <div className='medium-12 columns'>
        <Picture {...this.props} />
      </div>
    )
  }

  renderInput() {
    return (
      <div className='medium-9 columns'>
        <Input
          onChange={(e) => {
            this.props.changePhrase(e.target.value)
          }}
          value={this.props.phrase}
          placeholder='Type your phrase here...'
          type='text'
          ref='input' />
      </div>
    )
  }

  renderButton() {
    return (
      <div className='medium-3 columns'>
        <Button
          onClick={() => {
            this.props.submitPhrase(this.refs.input.props.value)
          }}
          cssClass='expanded'
          type='submit'
        >
          Picture it...
        </Button>
      </div>
    )
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.submitForm} >
          {this.renderPicture()}
          {this.renderInput()}
          {this.renderButton()}
        </form>
      </div>
    )
  }
}

export default Body;
