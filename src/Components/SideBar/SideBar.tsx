import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>

        <div className="dropdown-items-container">
          <div className="dropdown-btn">
            Basics
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="dropdown-container">
            <Link to="/basics">-Basics</Link>
            <Link to="/basics/intro">-Intro to Guitar</Link>
            <Link to="/basics/notes">-Notes</Link>
            <Link to="/basics/scales">-Scales</Link>
            <Link to="/basics/chords-intervals">-Chords & Intervals</Link>
            <Link to="/basics/chord-progressions">-Chord progressions</Link>
          </div>
        </div>

        <div className="dropdown-items-container">
          <div className="dropdown-btn">
            Chords
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="dropdown-container">
            <Link to="/chords">-Chords</Link>
            <Link to="/chords/open-chords">-Open Chords</Link>
            <Link to="/chords/barre-chords">-Barre Chords</Link>
            <Link to="/chords/power-chords">-Power Chords</Link>
            <Link to="/chords/chord-sheets">-Chord Sheets</Link>
          </div>
        </div>

        <div className="dropdown-items-container">
          <div className="dropdown-btn">
            Chords in Key
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="dropdown-container">
            <Link to="/chords-in-key">-Chords In Key</Link>
          </div>
        </div>

        <div className="dropdown-items-container">
          <div className="dropdown-btn">
            Scales
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="dropdown-container">
            <Link to="/scales">-Scales</Link>
            <Link to="/scales/major-scale">-Major Scale</Link>
            <Link to="/scales/minor-scale">-Minor Scale</Link>
            <Link to="/scales/pentatonic-scale">-Pentatonic Scale</Link>
            <Link to="/scales/blues-scale">-Blues Scale</Link>
          </div>
        </div>

        <div className="dropdown-items-container">
          <div className="dropdown-btn">
            Tips
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="dropdown-container">
            <Link to="/tips">-Tips</Link>
            <Link to="/tips/getting-in-tune">-Getting in tune</Link>
            <Link to="/tips/guitar-maintenance">-Guitar maintenance</Link>
            <Link to="/tips/1234-exercise">-1/2/3/4 exercise</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
