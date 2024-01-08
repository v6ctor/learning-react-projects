import './App.css'
import Navbar from './components/navbar'
import History from './components/History'
import Search from './components/Search'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'

function App() {

  const [pokemonName, setPokemonName] = useState("")
  const [history, setHistory] = useState(
    () => JSON.parse(localStorage.getItem("pokemonHistory")) || []
  )
  const [currentPokemon, setCurrentPokemon] = useState("")

  const handleSearchChange = (event) => {
    const { value } = event.target
    setPokemonName(value)
  }

  const handleSearchSubmit = async () => {
    if (history.findIndex((entry) => entry[0] === pokemonName) === -1) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
        );
  
        if (response.data.evolution_chain.url) {
          try {
            const chainResponse = await axios.get(
              response.data.evolution_chain.url
            );
  
            setHistory((prevHistory) => [
              ...prevHistory,
              [pokemonName, chainResponse.data],
            ]);
            setCurrentPokemon(chainResponse.data);
          } catch (error) {
            console.error(`ERROR: API Request Failed for Evolution Chain`);
          }
        }
      } catch (error) {
        console.error(`ERROR: API Request Failed for ${pokemonName}`);
        window.alert("Please enter a valid Pokemon name");
      }
    } else {
      setCurrentPokemon(history[history.findIndex((entry) => entry[0] === pokemonName)])
    }
  };

  useEffect(() => {
    localStorage.setItem("pokemonHistory", JSON.stringify(history))
  }, [history])

  // chore: Nanoid works but would rather use pokemon ID for key
  const items = history ? history.map((pokemon) => ({ pokemon: pokemon[0], data: pokemon[1], id: nanoid()})) : []
  const pokemon = currentPokemon ? currentPokemon : "Nothing to see here..."

  console.log(items)

  return (
   <>
    <Navbar />
    <main className='main'>
      <History 
        items={items}
      />
      <div className='results'>
        <div className='results__title'>
          <h1>Evolution Chain</h1>
        </div>
        <div className='results__content'>
          <div className='result__content__text'>
            {JSON.stringify(pokemon)}
          </div>
        </div>
        <Search 
          searchChange={handleSearchChange}
          searchClick={handleSearchSubmit}
        />
      </div>
      <div className='results__img'>Image goes here</div>
    </main>
   </>
  )
}

export default App
