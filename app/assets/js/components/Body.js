import React from 'react'
//import Input from './input'
import Button from './button'
import Phrase from './phrase'

class Body extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='medium-12 columns'>
          <Phrase />
        </div>
        <div className='medium-9 columns'>
          <input
              type='text'
              placeholder={this.props.placeholder}
              onChange={(e) => {
                console.log(e.target.value)
                this.props.changePhrase(e.target.value);
              }}
              value={this.props.phrase}
          />
        </div>
        <div className='medium-3 columns'>
          <Button
            onClick={this.props.submitPhrase}
            cssClass='expanded'
          >
            Picture it...
        </Button>
        </div>
      </div>
    )
  }
}

export default Body;
