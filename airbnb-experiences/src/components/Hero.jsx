import photoGrid from '/photo-grid.png'

export default function Hero() {
  return (
    <section>
      <img id='nav__photo-grid' src={photoGrid}></img>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
