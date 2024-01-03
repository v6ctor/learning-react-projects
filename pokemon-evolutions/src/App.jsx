import './App.css'
import pokeLogo from '/pokemon-logo.png'

function App() {

  return (
   <>
    <nav>
      <img id='nav__img' src={pokeLogo}></img>
    </nav>
    <main>
      <div className='main__search-bar'>
        <input id='main__search-bar__input'></input>
        <button id='main__search-bar__button'></button>
      </div>
    </main>
   </>
  )
}

export default App
