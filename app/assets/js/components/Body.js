import React from 'react'
import { connect } from 'react-redux'
import Input from './input'
import Button from './button'
import Phrase from './phrase'
import { changePhrase, submitPhrase } from '../actions'

const Body = ({ dispatch }) => {
  return (
  <div className='row'>
    <div className='medium-12 columns'>
      <Phrase />
    </div>
    <div className='medium-9 columns'>
      <Input
        onChange={(e) => {
          dispatch(changePhrase(e.target.value));
        }}
        placeholder='Type a phrase here...'
       />
    </div>
    <div className='medium-3 columns'>
      <Button
        onClick={() => {
          dispatch(submitPhrase());
        }}
        cssClass='expanded'
      >
        Picture it...
      </Button>
    </div>
  </div>
  )
}

export default connect()(Body)
