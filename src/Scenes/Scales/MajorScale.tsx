import { Link } from "react-router-dom";

function MajorScale() {
  return (
    <div>
      <div>
        <h1>Major Scale</h1>
      </div>

      <h2 className="s1">The major scale explained</h2>
      <p className="s2">
        The major scale (or Ionian mode) is one of the most popular scales of
        all time. Everything from Twinkle Twinkle Little Star to Darude's
        Sandstorm is played on a major scale. Like most scales it consists of
        seven notes. It's Tone/Semitone formula is T T S T T T S (see{" "}
        <Link to="basics/chords-intervals">Chords and Intervals</Link> for more
        info on tones and semitones).
      </p>

      <h2 className="s1">How to play a major scale</h2>
      <p className="s2">
        There are two common ways to play a major scale on a guitar.
        <em>Up the neck</em> and <em>down the neck.</em> These are shown below.
        However to play a major scale in general, all you need to do is pick a
        root note and play the Tone/Semitone formula from above.
      </p>

      <h2 className="s1">Playing major scale down the neck</h2>
      <p className="s2">
        To play a major scale down the neck, choose your starting note and play
        this pattern. <br />
        <img
          className="d1"
          src="/images/scales/major.png"
          alt="Major scale"
          style={{ maxWidth: "50%" }}
        />
      </p>

      <h2 className="s1">Playing major scale up the neck</h2>
      <p className="s2">
        To play a major scale up the neck, simply choose a starting note and
        play the Tone/Semitone sequence along the fretboard. This is shown below
        for the starting note of G. <br />
        <img
          className="d1"
          src="/images/scales/major-up-neck.png"
          alt="Major scale (up the neck)"
          style={{ maxWidth: "70%" }}
        />
      </p>

      <p className="s2">
        You can play a major scale in any key by shifting the root note in the
        patterns. For example, to play an A major scale, play the patterns but
        start on the fifth fret of the low E string.
      </p>
      <p className="s2">And WALA! There you have it, the major scale!</p>

      <p className="next">
        Up next <Link to="/scales/minor-scale">Minor scale</Link>
      </p>
    </div>
  );
}

export default MajorScale;
