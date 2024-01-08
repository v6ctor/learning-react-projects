import PropTypes from 'prop-types'

export default function Search(props) {
  return (
    <section className='search'>
      <div className='search-bar__wrapper'>
        <label htmlFor='search-bar__input'>Pok&#233;mon to Evolve</label>
        <div className='search-bar'>
          <input type="text" className="search-bar__input" placeholder="ditto" onChange={props.searchChange}></input>
          <button className='search__button'onClick={props.searchClick}>Evolve</button>
        </div>
      </div>
    </section>
  )
}

Search.propTypes = {
  searchChange: PropTypes.func,
  searchClick: PropTypes.func
}