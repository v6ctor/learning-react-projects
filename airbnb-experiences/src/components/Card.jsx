import star from '/star.png'
import person from '/person.png'

export default function Card() {
  return (
    <section className='card'>
      <img className='card__img-person' src={person}></img>
      <div className='card__information'>
        <div className='card__information--ratings'>
          <img className='card__information--ratings__star' src={star}></img>
          <p className='card__information--ratings__text'>5.0
            <span> (6) &#183; USA</span>
          </p>
        </div>
        <div className='card__information--activity'>
          <p className='card__information--activity__text'>Life lessons with Katie Zaferes</p>
          <div className='card__information--activity__pricing'>
            <span>From $136</span> / person
          </div>
        </div>
      </div>
    </section>
  )
}