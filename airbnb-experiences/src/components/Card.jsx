import star from '/star.png'
import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  render() {
    const { coverImg } = this.props.user
    console.log('/' + coverImg)
    return (
      <section className='card'>
        {this.props.user.openSpots === 0 && <div className="card__badge">SOLD OUT</div>}
        <img className='card__img-person' src={'/' + coverImg}></img>
        <div className='card__information'>
          <div className='card__information--ratings'>
            <img className='card__information--ratings__star' src={star}></img>
            <p className='card__information--ratings__text'>{this.props.user.stats.rating}
              <span> ({this.props.user.stats.reviewCount}) &#183; {this.props.user.location}</span>
            </p>
          </div>
          <div className='card__information--activity'>
            <p className='card__information--activity__text'>{this.props.user.title}</p>
            <div className='card__information--activity__pricing'>
              <span>From ${this.props.user.price}</span> / person
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Card.propTypes = {
  user: PropTypes.shape({
    coverImg: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    openSpots: PropTypes.number.isRequired,
  }).isRequired,
}

export default Card