import PropTypes from 'prop-types'

export default function History(props) {
  const elements = props.items.map((item) => {
    let itemIMG = ""
    for (const index in item.chainedData) {
      if (item.chainedData[index].name === item.pokemon) {
        itemIMG = item.chainedData[index].sprites.front_default
      }
    }
      return (
        <div key={item.id} className='item'>
          <img src={itemIMG}></img>
        <div className="item__title">
          {item.pokemon}
        </div>
      </div>
      )
    })
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