import { Link } from "react-router-dom";
import IntervalTable from "../../Components/Tables/IntervalTable";

function ChordsIntervals() {
  return (
    <div>
      <h1>Chords and Intervals</h1>

      <h2 className="s1">Chords Intro</h2>
      <p className="s2">
        Chords are multiple notes played at one time. The most common chord
        types are <em>major chords</em> and <em>minor chords</em>. The vast
        majority of music you hear on the radio will consist of a combination of
        major and minor chords. Even though major and minor chords are insanely
        popular, you will definitely benefit from learning other chord types
        such as diminished chords.
      </p>
      <p className="s2">
        In order to really understand chords, first you will need to learn about{" "}
        <strong>intervals.</strong>
      </p>

      <h2 className="s1">Intervals</h2>
      <p className="s2">
        Intervals in music theory can be thought of as the relationship between
        two notes. You may recall from the <Link to="/notes">notes</Link>{" "}
        section the concept of a <em>tone</em> and <em>semitone</em>. Well these
        are the most commonly spoken about intervals, and are also known as a{" "}
        <em>major second</em> and <em>minor second</em> respectively.
      </p>
      <p className="s2">
        Intervals are generally referring to distances between notes on a scale.
        For example, a minor third is the distance between the first and third
        note in a minor scale (with the exception of the so called 'perfect'
        intervals I, IV, V, octave).
      </p>
      <p className="s2">
        The table below shows each interval and their common abbreviations.
      </p>

      <IntervalTable />

      <h2 className="s1">Chords</h2>
      <p className="s2">
        At a fundamental level, chords are built using intervals and scale
        degrees. For example, a major chord is a triad that consists of the 1st,
        3rd, and 5th, scale degrees of the major scale. All chords are built off
        of some combination of intervals and scale degrees.
      </p>

      <h3>Major Triad</h3>
      <p className="s2">
        The major triad consists of three notes of the major scale. Below is a G
        major chord. Notice how it only consists of three notes G, B, and D.
        These are the 1st, 3rd, and 5th degrees of the{" "}
        <strong>G major scale</strong>. To learn more about scales, considering
        heading over to our <Link to="/scales">scales page</Link>.
      </p>

      <img
        src="/images/chord-diagrams/G-with-notes.png"
        alt="G"
        style={{ maxWidth: "40vw" }}
      />
      <p className="s2">
        This concept of a major triad applies to any major scale. For example,
        to play an A major scale, play the 1st, 3rd, and 5th scale degrees of
        the A major scale (A, D♭, E). If you know the scale, you can play the
        chord.
      </p>

      <h3>Minor Triad</h3>
      <p className="s2">
        Minor triads are identical to major triads in that they are the 1st,
        2nd, and 3rd degrees in the scale. However where they differ is in the
        <em>scale</em> they are playing. As you can tell, this scale is the{" "}
        <strong>minor scale</strong>. So to play a G minor chord, play the 1st,
        3rd, and 5th degrees of the G minor scale G, B♭, E.
      </p>

      <h2 className="s1">Other chord types</h2>
      <p className="s2">
        There are many different chord types including, diminished, augmented,
        major 7th, minor 7th, etc. However the two most important chords to know
        are the major triad and the minor triad. These two are absolutely
        fundamental to majority of music out there. Feel free to get your feet
        wet in other chord types and spice your music up!
      </p>
      <p className="next">
        Up next <Link to="/basics/chord-progressions">Chord progressions</Link>
      </p>
    </div>
  );
}

export default ChordsIntervals;
