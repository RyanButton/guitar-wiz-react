function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>

        <div className="dropdown-items-container">
          <button className="dropdown-btn">
            Basics
            <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-container">
            <a href="/basics">-Basics</a>
            <a href="/basics/intro">-Intro to Guitar</a>
            <a href="/basics/notes">-Notes</a>
            <a href="/basics/scales">-Scales</a>
            <a href="/basics/chords-intervals">-Chords & Intervals</a>
            <a href="/basics/chord-progressions">-Chord progressions</a>
          </div>
        </div>

        <div className="dropdown-items-container">
          <button className="dropdown-btn">
            Chords
            <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-container">
            <a href="/chords">-Chords</a>
            <a href="/chords/open-chords">-Open Chords</a>
            <a href="/chords/barre-chords">-Barre Chords</a>
            <a href="/chords/power-chords">-Power Chords</a>
            <a href="/chords/chord-sheets">-Chord Sheets</a>
          </div>
        </div>

        <div className="dropdown-items-container">
          <button className="dropdown-btn">
            Chords in Key
            <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-container">
            <a href="/chords-in-key">-Chords In Key</a>
            <a href="/chords-in-key/chords-in-major">-Chords in Major</a>
            <a href="/chords-in-key/chords-in-minor">-Chords in Minor</a>
          </div>
        </div>

        <div className="dropdown-items-container">
          <button className="dropdown-btn">
            Scales
            <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-container">
            <a href="/scales">-Scales</a>
            <a href="/scales/major-scale">-Major Scale</a>
            <a href="/scales/minor-scale">-Minor Scale</a>
            <a href="/scales/pentatonic-scale">-Pentatonic Scale</a>
            <a href="/scales/blues-scale">-Blues Scale</a>
          </div>
        </div>

        <div className="dropdown-items-container">
          <button className="dropdown-btn">
            Tips
            <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-container">
            <a href="/tips">-Tips</a>
            <a href="/tips/getting-in-tune">-Getting in tune</a>
            <a href="/tips/guitar-maintenance">-Guitar maintenance</a>
            <a href="/tips/1234-exercise">-1/2/3/4 exercise</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
