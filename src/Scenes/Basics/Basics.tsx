import { Link } from 'react-router-dom'

function Basics() {
  return (
    <div>
      <div>
        <h1>Basics</h1>
        <h2>Start from the start...</h2>
        <p className="s1">
          This section is intended to give you a brief overview of the basics.
          This is of the utmost importance, as everything solid must be built on
          a sturdy foundation. Get to know your guitar, inside and out, and you
          will thank yourself years down the track. Learn the fundamental
          building blocks, and who knows what you will build someday.
        </p>
      </div>

      <div>
        <Link to="/basics/intro">
          <h3>Introduction</h3>
        </Link>
        <p>
          Get to your the parts of your guitar, the names of the strings (and
          how to remember them!)
        </p>
      </div>
      <div>
        <Link to="/basics/notes">
          <h3>Notes</h3>
        </Link>
        <p>Learn the notes on a guitar.</p>
      </div>
      <div>
        <Link to="/basics/scales">
          <h3>Scales</h3>
        </Link>
        <p>Scales and the basics of melody.</p>
      </div>
      <div>
        <Link to="/basics/chords-intervals">
          <h3>Chords and Intervals</h3>
        </Link>
        <p>
          Here an intro to chord (and intervals) is given, building on the
          knowledge of notes.
        </p>
      </div>
      <div>
        <Link to="/basics/chord-progressions">
          <h3>Chord Progressions</h3>
        </Link>
        <p>
          Learn how chords are used to build chord progressions, the foundation
          to a wealth of music.
        </p>
      </div>
    </div>
  )
}

export default Basics
