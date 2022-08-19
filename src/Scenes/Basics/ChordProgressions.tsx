import { Link } from "react-router-dom";
import CMajorTable from "../../Components/Tables/CMajorTable";

function ChordProgressions() {
  return (
    <div>
      <h1>Chords Progressions</h1>

      <h2 className="s1">Intro to progressions</h2>
      <p className="s2">
        Chord progressions are sequences of chords that belong to a given{" "}
        <strong>key.</strong> You can think of a key as a set of notes/chords
        that
        <em>stem</em> from a parent note. The key generally follows a major or
        minor mode (i.e major or minor scale).
      </p>

      <h2 className="s1">Musical keys and Roman Numeral Analysis</h2>
      <p className="s2">
        A key is a set of notes/chords that align with a scale. Chords in key
        can be analysed with <strong>roman numerals</strong>.
      </p>
      <p className="s2">
        For every note in the scale (i.e for every scale degree) there is a
        corresponding chord. Each of these chords are assigned with a roman
        numeral. With this model, musicians can abstract their chord
        progressions to numbers that will be consistent across any starting note
        of the same scale.
      </p>
      <p className="s2">
        Below is the <strong>roman numeral diagram</strong> for the key of{" "}
        <strong>C Major</strong> with 'I' being the first note and 'VII' being
        the last note in the scale.
      </p>
      <CMajorTable />
      <p className="s2">
        From this diagram, it is easy to recognize what chords belong to the key
        of C major, and one can easily start creating{" "}
        <em>chord progressions.</em>
      </p>
      <p className="s2">
        While it is great to be able to experiment with your own progressions,
        there are some very popular almost 'standard' progressions that are
        worth knowing. The most popular being a I-IV-V progression.
      </p>

      <h2 className="s1">I-IV-V... the most played progression</h2>
      <p className="s2">
        The I-IV-V progression is ubiquitous across many styles of music. From
        blues to rock to pop one-four-fives are everywhere. As you've seen from
        the diagram above, the chords for a one-four-five in C Major are{" "}
        <em>C major, F major, and G major.</em> Below are the chord diagrams,
        have a go a playing them!
      </p>

      <div className="chord-prog-diagram">
        <img src="/images/chord-diagrams/C.png" alt="C Major chord diagram" />
        <img src="/images/chord-diagrams/G.png" alt="G Major chord diagram" />
        <img src="/images/chord-diagrams/F.png" alt="F Major chord diagram" />
      </div>
      <h2 className="s1">II-V-I... another popular progression</h2>
      <p className="s2">
        Another popular progression is a II-V-I. Try playing it in C with the
        chords below.
      </p>

      <div className="chord-prog-diagram">
        <img src="/images/chord-diagrams/Dm.png" alt="D Minor chord diagram" />
        <img src="/images/chord-diagrams/F.png" alt="F Major chord diagram" />
        <img src="/images/chord-diagrams/C.png" alt="C Major chord diagram" />
      </div>
      <p className="s2">
        There are of course many different chord progressions in many different
        keys. That's part of what makes music so interesting. There are an
        infinite different combinations of chords across all twelve keys. If you
        want to learn more chord progressions in different keys have a look at{" "}
        <Link to="/chords-in-key">Chords in Key section.</Link>
      </p>
    </div>
  );
}

export default ChordProgressions;
