import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

export default function App() {
    return (
      <div className='container'>
        <Navbar />
        <Hero />
        <Card />
      </div>
    )
}