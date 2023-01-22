import { Link } from 'react-router-dom'

function PentatonicScale() {
  return (
    <div>
      <div>
        <h1>Pentatonic Scale</h1>
      </div>

      <h2 className="s1">The pentatonic minor scale explained</h2>
      <p className="s2">
        The pentatonic minor is very common scale in rock and pop music. It is
        essentially a modified modified minor scale, although it is a beast in
        it's own right. It gets it's name from <em>penta</em> (meaning five) and{' '}
        <em>tonic</em> relating to tone. Five tones i.e five <em>notes</em>.
        These five notes are the 1st, 3rd, 4th, 5th, and 7th intervals of the
        minor scale (i.e a minor scale with the 2nd and 6th note removed).
        <br />
        The tonal formula for this scale is: Minor-third - Tone - Tone -
        Minor-third - Tone.
      </p>

      <h2 className="s1">How to play a pentatonic scale</h2>
      <p className="s2">
        Like any other scale, there are two common ways to play a pentatonic
        minor scale on a guitar. <em>Up the neck</em> and{' '}
        <em>down the neck.</em> These are shown below. However to play a
        pentatonic minor scale in general, all you need to do is pick a root
        note and play the tonal formula from above.
      </p>

      <h2 className="s1">Playing pentatonic scale down the neck</h2>
      <p className="s2">
        To play a pentatonic scale down the neck, choose your starting note and
        play this pattern. <br />
        <img
          className="d1"
          src="/images/scales/pentatonic.png"
          alt="Pentatonic scale"
          style={{ maxWidth: '50%;' }}
        />
      </p>

      <h2 className="s1">Playing pentatonic scale up the neck</h2>
      <p className="s2">
        To play a pentatonic scale up the neck, simply choose a starting note
        and play the Tone/Semitone sequence along the fretboard. This is shown
        below for the starting note of G. <br />
        <img
          className="d1"
          src="/images/scales/pent-up-neck.png"
          alt="Pentatonic scale (up the neck)"
          style={{ maxWidth: '70%;' }}
        />
      </p>

      <p className="s2">
        You can play a minor scale in any key by shifting the root note in the
        patterns. For example, to play an E pentatonic scale, play the patterns
        but start on the open fret of the low E string.
      </p>
      <p className="s2">
        And WALA! There you have it, the pentatonic scale! Happy Shredding!
      </p>

      <p className="next">
        Up next <Link to="/scales/blues-scale">Blues scale</Link>
      </p>
    </div>
  )
}

export default PentatonicScale
