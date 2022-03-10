function Home() {
  return (
    <>
      <div className="welcome-message">
        <h1>Welcome to Guitar Wiz!</h1>
        <h2>The ultimate guitar reference guide</h2>
        <p className="s1">
          Music Theory made easy. That's our mission. We here at Guitar Wiz know
          what it's like to feel stuck in music theory hell. At the end of the
          day, most of us just want to play. That's what musicians do best.
          However without practice on the fundamentals, your playing will
          quickly plataeu and cease to improve, and that's where Guitar Wizard
          comes in.
        </p>
        <p className="s2">
          Guitar Wiz is a 100% free service, however if you want to support
          Guitar Wizard head over to our <a href="/about">About</a> page for
          details.
        </p>
      </div>

      <div className="page-grid-wrapper">
        <div className="page-grid-items-wrapper">
          <a href="/basics" className="page-grid-item-wrapper">
            <div
              className="page-grid-item-img-background"
              style={{ backgroundImage: "url(images/chords.jpg)" }}
            ></div>

            <div className="page-grid-text-wrapper">
              <div className="page-grid-title-wrapper">
                <h2>Basics</h2>
              </div>

              <div className="page-grid-subtitle-wrapper">
                <p>Learn the basics of guitar theory.</p>
              </div>
            </div>
          </a>
          <a href="/chords" className="page-grid-item-wrapper">
            <div
              className="page-grid-item-img-background"
              style={{ backgroundImage: "url(images/barre-chord.jpg)" }}
            ></div>

            <div className="page-grid-text-wrapper">
              <div className="page-grid-title-wrapper">
                <h2>Chords</h2>
              </div>
              <div className="page-grid-subtitle-wrapper">
                <p>Learn guitar chords with chord sheets and diagrams.</p>
              </div>
            </div>
          </a>

          <a href="/chords-in-key" className="page-grid-item-wrapper">
            <div
              className="page-grid-item-img-background"
              style={{ backgroundImage: "url(images/chords-in-key.jpg)" }}
            ></div>

            <div className="page-grid-text-wrapper">
              <div className="page-grid-title-wrapper">
                <h2>Chords in Key</h2>
              </div>

              <div className="page-grid-subtitle-wrapper">
                <p>
                  Discover which chords belong to what key, and common chord
                  progression patterns.
                </p>
              </div>
            </div>
          </a>

          <a href="/scales" className="page-grid-item-wrapper">
            <div
              className="page-grid-item-img-background"
              style={{ backgroundImage: "url(images/scales.jpg)" }}
            ></div>

            <div className="page-grid-text-wrapper">
              <div className="page-grid-title-wrapper">
                <h2>Scales</h2>
              </div>

              <div className="page-grid-subtitle-wrapper">
                <p>
                  Study guitar scales and modes to harness to power of melody.
                </p>
              </div>
            </div>
          </a>

          <a href="/tips" className="page-grid-item-wrapper">
            <div
              className="page-grid-item-img-background"
              style={{ backgroundImage: "url(images/tips.jpg)" }}
            ></div>

            <div className="page-grid-text-wrapper">
              <div className="page-grid-title-wrapper">
                <h2>Tips</h2>
              </div>

              <div className="page-grid-subtitle-wrapper">
                <p>
                  Tips and tricks to help bring your guitar playing to the next
                  level.
                </p>
              </div>
            </div>
          </a>
          <a href="/about" className="page-grid-item-wrapper">
            <div
              className="page-grid-item-img-background"
              style={{ backgroundImage: "url(images/background-img2.jpg)" }}
            ></div>

            <div className="page-grid-text-wrapper">
              <div className="page-grid-title-wrapper">
                <h2>About</h2>
              </div>

              <div className="page-grid-subtitle-wrapper">
                <p>About Guitar Wiz.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p className="s2" style={{ float: "right" }}>
        © 2022 Guitar Wiz
      </p>

      {/* <script>
    const pageGridItems = document.querySelectorAll(".page-grid-item-wrapper");
  
    pageGridItems.forEach((pageGridItem) => {
      pageGridItem.addEventListener("mouseover", () => {
        pageGridItem.children[0].classList.add("img-darken");
      });
  
      pageGridItem.addEventListener("mouseout", () => {
        pageGridItem.children[0].classList.remove("img-darken");
      });
    });
  </script> */}
    </>
  );
}

export default Home;
