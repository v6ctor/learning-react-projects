import PropTypes from 'prop-types'

export default function History(props) {
  const elements = props.items.map((item) => (
    <div key={item.id}>
      <div className="item__title">
        {item.pokemon}
      </div>
    </div>
  ))
  return (
    <section className="history-bar">
      <h1>Search History</h1>
      {elements}
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