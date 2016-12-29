import React from 'react'
import Input from './input'
import Button from './button'
import Phrase from './phrase'

const Body = () => (
  <div className='row'>
    <div className='medium-12 columns'>
      <Phrase />
    </div>
    <div className='medium-9 columns'>
      <Input />
    </div>
    <div className='medium-3 columns'>
      <Button
        onClick={() => {
          console.log('hmmmm')
        }}
        cssClass='expanded'
      >
        Picture it...
      </Button>
    </div>
  </div>
)

export default Body
