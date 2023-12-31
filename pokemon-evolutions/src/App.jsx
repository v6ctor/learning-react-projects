import './App.css'
import Navbar from './components/navbar'
import History from './components/History'
import Search from './components/Search'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import findEvolutions from './utils/Evolutions'
import axios from 'axios'

function App() {

  const [pokemonName, setPokemonName] = useState("")
  const [history, setHistory] = useState(
    () => JSON.parse(localStorage.getItem("pokemonHistory")) || []
  )
  const [currentPokemon, setCurrentPokemon] = useState("")

  const handleSearchChange = (event) => {
    const { value } = event.target
    setPokemonName(value.toLowerCase())
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
            const evolutionsList = []
            findEvolutions(chainResponse.data, evolutionsList)
            const evolutionURLs = evolutionsList.map(async (evolution) => {
              const response = await axios.get((evolution.species.url).replace("-species", ""))
              return response.data
            })
            const resolvedEvolutions = await Promise.all(evolutionURLs)
      
            setHistory((prevHistory) => [
              ...prevHistory,
              [pokemonName, chainResponse.data, resolvedEvolutions],
            ]);
            setCurrentPokemon(chainResponse.data);
          } catch (error) {
            console.error(error);
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
  const items = history ? history.map((pokemon) => ({ pokemon: pokemon[0], data: pokemon[1], chainedData: pokemon[2], id: nanoid()})) : []
  const pokemon = currentPokemon ? currentPokemon : "Nothing to see here..."

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
