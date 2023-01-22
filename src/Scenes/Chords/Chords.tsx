import { Link } from 'react-router-dom'

function Chords() {
  return (
    <div>
      <div>
        <h1>Chords</h1>
        <h2>What is a chord? The building blocks of music.</h2>
        <p className="s1">
          A chord is two or more notes played in unison. These make up the
          building blocks for all popular music. There are many different types
          of chords on guitar, with open chords being the most common. This is a
          good place to start if you are a complete beginner.
        </p>
      </div>

      <div>
        <Link to="/chords/open-chords">
          <h3>Open Chords</h3>
        </Link>
        <p>
          "Open Chords" get their name from the fact that are played close to
          the nut and have 'open' notes. This is called the open position{' '}
        </p>
      </div>
      <div>
        <Link to="/chords/barre-chords">
          <h3>Barre Chords</h3>
        </Link>
        <p>
          "Barre Chords" get their name from the fact that the guitarist
          'barres' their finger across the fretboard, effectively making a new
          nut.
        </p>
      </div>
      <div>
        <Link to="/chords/power-chords">
          <h3>Power Chords</h3>
        </Link>
        <p>
          "Power Chords" get their name from the fact that they sound
          'powerful'. It is debated that these are not actually chords are just
          intervals.
        </p>
      </div>
      <div>
        <Link to="/chords/chord-sheets">
          <h3>Chord Sheets</h3>
        </Link>
        <p>Chords sheets for all types of chords.</p>
      </div>
    </div>
  )
}

export default Chords
