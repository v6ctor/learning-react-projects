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
        <div className="history-bar__flex-container">
          {elements}
        </div>
      </div>
    </section>
  )
}

History.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    pokemon: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    chainedData: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
  })),
};