import React from 'react'
import Input from './input'
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
          <Input
            onChange={(e) => {
              this.props.changePhrase(e.target.value)
            }}
            placeholder='Type a phrase here...'
            {...this.props}
           />
        </div>
        <div className='medium-3 columns'>
          <Button
            onClick={() => {
              this.props.submitPhrase()
            }}
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
