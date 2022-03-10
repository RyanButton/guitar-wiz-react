function ChordsIntervals() {
  return (
    <div>
      <h1>Scales</h1>

      <h2 className="s1">Introducing Scales</h2>
      <p className="s2">
        Scales are collections of notes that begin with a root note and sync
        harmoniously. The two most common scales are the <em>major scale</em>{" "}
        and
        <em>minor scale.</em> These two scales are therefore the two most common
        <em>keys</em> in music (major key and minor key).
      </p>

      <h2 className="s1">Scale Degree</h2>
      <p className="s2">
        The idea of measuring the distance of notes in a scale is known as the
        <strong>scale degree</strong>. The scale degree of a note is simply it's
        place in that scale. E.g the third note in a scale is equivalent to the
        third scale degree. This is the foundation of the key in a music and the
        roman numeral analysis found in
        <a href="/basics/chord-progressions">chord progressions.</a>
      </p>

      <h2 className="s1">Major Scale</h2>
      <p className="s2">
        The major scale is probably the most used scale in music, followed by
        the minor scale. It is generally associated with feelings of happiness
        and tends to portray those feelings. It's Tone/Semitone formula is T T S
        T T T S (see
        <a href="basics/chords-intervals">Chords and Intervals</a> for more info
        on tones and semitones). Below is the scale diagram for a G major scale,
        have a go at playing it (start slow!)
      </p>
      <img
        className="d1"
        src="/images/scales/major.png"
        alt="Major scale"
        style={{ maxWidth: "50%" }}
      />

      <h2 className="s1">Minor Scale</h2>
      <p className="s2">
        The minor scale is a more moody and solemn scale than the major, and is
        a great contrast to the major. It is used frequently in many forms of
        music. It's Tone/Semitone formula is T S T T S T T (see
        <a href="basics/chords-intervals">Chords and Intervals</a> for more
        info). Below is the scale diagram for a F# minor scale.
      </p>
      <img
        className="d1"
        src="/images/scales/minor.png"
        alt="Minor scale"
        style={{ maxWidth: "50%" }}
      />

      <h2 className="s1">Other scale types</h2>
      <p className="s2">
        There are many different scales out there, such as the pentatonic scale
        or the blues scale, all with their unique sound and feel. Head over to
        our
        <a href="/scales">Scales page</a> to learn more scales.
      </p>

      <p className="next">
        Up next <a href="/basics/chords-intervals">Chords and Intervals</a>
      </p>
    </div>
  );
}

export default ChordsIntervals;
