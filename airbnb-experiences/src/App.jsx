import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.js'

export default function App() {
    const cards = data.map((user) => {
      return (
        <Card 
          key={user.id}
          user={user}
        />
      )
    })
    console.log(cards)
    return (
      <div className='container'>
        <Navbar />
        <Hero />
        <section className='cards-list'>
          {cards}
        </section>
      </div>
    )
}