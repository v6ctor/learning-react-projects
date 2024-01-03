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
          img={user.coverImg}
          rating={user.stats.rating}
          reviewCount={user.stats.reviewCount}
          location={user.location}
          title={user.title}
          price={user.price}
          openSpots={user.openSpots}
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