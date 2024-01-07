import PropTypes from 'prop-types'

export default function History(props) {
  const elements = props.items.map((item) => (
    <div key={item.id} className='item'>
      <div className="item__title">
        {item.pokemon}
      </div>
    </div>
  ))
  return (
    <section className="history-bar">
      <div className='history-bar__title'>
        <h1>Search History</h1>
      </div>  
      <div className="history-bar__scroll-wrapper">
        {elements}
      </div>
    </section>
  )
}

History.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pokemon: PropTypes.string.isRequired,
    })
  ).isRequired,
}