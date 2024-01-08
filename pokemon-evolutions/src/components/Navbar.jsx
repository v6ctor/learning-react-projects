import logo from '/pokemon-logo.png'

export default function Navbar() {
  return (
    <nav>
      <img className='nav__img' src={logo}></img>
    </nav>
  )
}