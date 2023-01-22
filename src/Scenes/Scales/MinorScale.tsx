import { Link } from 'react-router-dom'

function MinorScale() {
  return (
    <div>
      <div>
        <h1>Minor Scale</h1>
      </div>

      <h2 className="s1">The minor scale explained</h2>
      <p className="s2">
        The minor scale (or Aeolian mode) like the major scale, is one of the
        most popular scales of all time. It has a sad or moody tone to it, and
        sounds absolutely beautiful in the right context. Many songs from Hurt
        (Nine Inch Nails) to Sweet Child O' Mine (Guns N' Roses) use the minor
        scale. Like most scales it consists of seven notes. It's Tone/Semitone
        formula is T S T T S T T (see{' '}
        <Link to="basics/chords-intervals">Chords and Intervals</Link> for more
        info on tones and semitones).
      </p>

      <h2 className="s1">How to play a minor scale</h2>
      <p className="s2">
        Like the major scale, there are two common ways to play a minor scale on
        a guitar. <em>Up the neck</em> and <em>down the neck.</em> These are
        shown below. However to play a minor scale in general, all you need to
        do is pick a root note and play the Tone/Semitone formula from above.
      </p>

      <h2 className="s1">Playing minor scale down the neck</h2>
      <p className="s2">
        To play a minor scale down the neck, choose your starting note and play
        this pattern. <br />
        <img
          className="d1"
          src="/images/scales/minor.png"
          alt="Minor scale"
          style={{ maxWidth: '50%' }}
        />
      </p>

      <h2 className="s1">Playing minor scale up the neck</h2>
      <p className="s2">
        To play a minor scale up the neck, simply choose a starting note and
        play the Tone/Semitone sequence along the fretboard. This is shown below
        for the starting note of F#. <br />
        <img
          className="d1"
          src="/images/scales/minor-up-neck.png"
          alt="Minor scale (up the neck)"
          style={{ maxWidth: '70%' }}
        />
      </p>

      <p className="s2">
        You can play a minor scale in any key by shifting the root note in the
        patterns. For example, to play an A minor scale, play the patterns but
        start on the fifth fret of the low E string.
      </p>
      <p className="s2">And WALA! There you have it, the minor scale!</p>

      <p className="next">
        Up next <Link to="/scales/pentatonic-scale">Pentatonic scale</Link>
      </p>
    </div>
  )
}

export default MinorScale
