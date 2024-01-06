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

  const handleSearchChange = (event) => {
    const { value } = event.target
    console.log(value)
    setPokemonName(value)
  }

  const handleSearchSubmit = async () => {
    try {
      // Easiest response to consume at the moment
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
        )

      if (response.data.evolution_chain.url) {
        setHistory(prevHistory => ([...prevHistory, pokemonName]))
      }
    } catch (error) {
      console.error(`ERROR: API Request Failed on ${pokemonName}`)
      window.alert("Please enter a valid Pokemon name")
    }
    
  }

  useEffect(() => {
    localStorage.setItem("pokemonHistory", JSON.stringify([...history]))
  }, [history])

  // chore: Nanoid works but would rather use pokemon ID for key
  const items = history ? history.map((pokemon) => ({ pokemon, id: nanoid() })) : []

  return (
   <>
    <Navbar />
    <main>
      <History 
        items={items}
      />
      <Search 
        searchChange={handleSearchChange}
        searchClick={handleSearchSubmit}
      />
    </main>
   </>
  )
}

export default App
