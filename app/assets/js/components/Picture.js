import React from 'react'

class Picture extends React.Component {

  getPicture(word) {
    return this.props.pictures.find((picture) => {
      return picture.word == word;
    });
  }

  renderPhrase() {
    const words = this.props.phrase.trim().split();

    return (
      <div>
          {words.map((word, i) => {
            const pic = this.getPicture(word);
            if (pic) {
              return <img src={pic.imageUrl} key={i} />;
            } else {
              return <span key={i}>{word}</span>;
            }
          })}
      </div>
    )
  }

  renderPlaceholder() {
    return (
      <div>
        placeholder here
      </div>
    )
  }

  render() {
    console.log(this)
    return (
      <div className='picture'>
        { this.props.phrase.trim() !== '' ? this.renderPhrase() : this.renderPlaceholder() }
      </div>
    )
  }
}

export default Picture
