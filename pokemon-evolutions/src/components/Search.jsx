import PropTypes from 'prop-types'

export default function Search(props) {
  return (
    <section>
      <label htmlFor='main__search-bar__input'>Pokemon to Evolve</label>
      <input type="text" className="main__search-bar__input" placeholder="ditto" onChange={props.searchChange}></input>
      <button onClick={props.searchClick}></button>
    </section>
  )
}

Search.propTypes = {
  searchChange: PropTypes.func,
  searchClick: PropTypes.func
}