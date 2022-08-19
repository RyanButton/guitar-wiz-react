import { Link } from "react-router-dom";

function PowerChords() {
  return (
    <div>
      <div>
        <h1>Power Chords</h1>
      </div>

      <h2 className="s1">What is a power chord? Is it powerful?</h2>
      <p className="s2">
        Power chords, also known as fifth chords, are used frequently in rock
        and heavy metal. They are very simple chords consisting of only two
        notes. Technically speaking, they barely even qualify as chords, as they
        are only two notes, which is an interval. Are they powerful?{" "}
        <em>Hell yes.</em>
        There is something uniquely sleek and 'rocky' about power chords, which
        is why they are used throughout rock and heavy metal so frequently. Lets
        jump right into how to play them shall we?
      </p>

      <h2 className="s1">How to play a power chord</h2>
      <p className="s2">
        To play a power chord simply pick any note on the fretboard and play it
        with it's perfect fifth, i.e the fifth note on the major scale. Don't
        worry if you don't understand this, the pattern is quite simple. For the
        first and second string, it looks like this:
      </p>

      <img className="d1" src="/images/chord-diagrams/F5.png" alt="F5 Chord" />
      <img className="d1" src="/images/chord-diagrams/B5.png" alt="B5 Chord" />

      <p className="s2">
        That's all there is to a power chord. Pick a note, play it's fifth
        interval, and strum it until the sun comes up. While simple they are
        also *clears throat* <i>powerful.</i> Many tunes use power chords, such
        as the main riff in Rock You Like a Hurricane by the Scorpions. Hear is
        the tablature for it below, give it a try!
      </p>

      <img
        className="d1"
        src="/images/chords-section/hurricane.png"
        alt="Rock you like a hurricane tab"
        style={{ maxWidth: "50%" }}
      />

      <p className="s2">
        Notice how there is an extra note in the power chords on this tab? That
        note is an octave. Playing the octave is completely optional. For those
        of you who don't know what an octave is, an octave is the same note but
        with a different pitch. Since these chords are "doubling up" on the root
        note, i.e they are playing an octave, with a perfect fifth, it is still
        classified as a power chord.
      </p>

      <p className="s2">
        There's not much else to say about power chords. Simple, easy, and
        rocking. If you can master playing it and moving the shape around the
        fretboard, you can play many rock classics. Happy guitaring!
      </p>

      <p className="next">
        Up next <Link to="/chords/chord-sheets">Chord Sheets</Link>
      </p>
      <br />
    </div>
  );
}

export default PowerChords;
