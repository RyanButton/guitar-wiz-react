function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <a href="/">
          <img src="/images/logo3.png" alt="Guitar Wiz" />
        </a>
      </div>
      <div className="navbar-wrapper">
        <div className="navbar-items-wrapper">
          <div className="navbar-item-wrapper">
            <a href="/">Home</a>
          </div>

          <div className="navbar-item-wrapper">
            <a href="/basics">Basics</a>
          </div>

          <div className="navbar-item-wrapper">
            <a href="/chords">Chords</a>
          </div>

          <div className="navbar-item-wrapper">
            <a href="/chords-in-key">Chords in Key</a>
          </div>

          <div className="navbar-item-wrapper">
            <a href="/scales">Scales</a>
          </div>

          <div className="navbar-item-wrapper">
            <a href="/tips">Tips</a>
          </div>

          <div className="navbar-item-wrapper">
            <a href="/about">About</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
