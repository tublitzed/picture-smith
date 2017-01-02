import React from 'react'

class Picture extends React.Component {

  getPicture(word) {
    return this.props.pictures.find((picture) => {
      return picture.word == word && picture.imageUrl;
    });
  }

  renderPhrase() {
    const words = this.props.phrase.trim().split(' ');

    return (
      <div>
          {words.map((word, i) => {
            const pic = this.getPicture(word);
            if (pic) {
              return <img src={pic.imageUrl} key={i} className='picture__img' />;
            } else {
              return <span className='picture__text' key={i}>{word}</span>;
            }
          })}
      </div>
    )
  }

  renderPlaceholder() {
    return (
      <div className='picture__placeholder'>
        Your picture will go here
      </div>
    )
  }

  render() {
    return (
      <div className='picture'>
        <div className='picture__content'>
          { this.props.pictures.length ? this.renderPhrase() : this.renderPlaceholder() }
        </div>
      </div>
    )
  }
}

export default Picture
