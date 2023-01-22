import { Link } from 'react-router-dom'

function BluesScale() {
  return (
    <div>
      <div>
        <h1>Blues Scale</h1>
      </div>
      <h2 className="s1">The blues scale explained</h2>
      <p className="s2">
        The blues scale is a variation of the pentatonic scale, with a the only
        difference being a flatten fifth of the minor scale being added. It
        (obviously) has a very blues sound, and is used commonly in, you guessed
        it, the blues! Try playing it with the chord diagram below.
      </p>

      <h2 className="s1">How to play the blues scale</h2>
      <p className="s2">
        There are two common ways to play a blues scale on a guitar.
        <em>Up the neck</em> and <em>down the neck.</em> These are shown below.
      </p>

      <h2 className="s1">Playing blues scale down the neck</h2>
      <p className="s2">
        To play a blues scale down the neck, choose your starting note and play
        this pattern. <br />
        <img
          className="d1"
          src="/images/scales/blues.png"
          alt="Blues scale"
          style={{ maxWidth: '50%' }}
        />
      </p>

      <h2 className="s1">Playing blues scale up the neck</h2>
      <p className="s2">
        To play a blues scale up the neck, simply choose a starting note and
        play this sequence along the fretboard. This is shown below for the
        starting note of G. <br />
        <img
          className="d1"
          src="/images/scales/blues-up-neck.png"
          alt="Blues scale (up the neck)"
          style={{ maxWidth: '70%' }}
        />
      </p>

      <p className="s2">
        You can play a blues scale in any key by shifting the root note in the
        patterns. For example, to play an A blues scale, play the patterns but
        start on the fifth fret of the low E string.
      </p>
      <p className="s2">And WALA! There you have it, the blues scale!</p>

      <p className="next">
        Up next <Link to="/tips">Tips</Link>
      </p>
    </div>
  )
}

export default BluesScale
