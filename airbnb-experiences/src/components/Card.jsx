import star from '/star.png'
import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  render() {
    const { img } = this.props
    console.log('/' + img)
    return (
      <section className='card'>
        <img className='card__img-person' src={'/' + img}></img>
        <div className='card__information'>
          <div className='card__information--ratings'>
            <img className='card__information--ratings__star' src={star}></img>
            <p className='card__information--ratings__text'>{this.props.rating}
              <span> {this.props.reviewCount} &#183; {this.props.country}</span>
            </p>
          </div>
          <div className='card__information--activity'>
            <p className='card__information--activity__text'>{this.props.title}</p>
            <div className='card__information--activity__pricing'>
              <span>From ${this.props.price}</span> / person
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Card