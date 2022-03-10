function Notes() {
  return (
    <div>
      <h1>Notes</h1>

      <h2 className="s1">Introducing notes</h2>
      <p className="s2">
        Put simply, notes are just sounds. Very specific sounds that have been
        given labels. If you could grab the air in front of you right now and
        shake it 523.25 times a second, you would produce a C5 note. 440 times
        and you would produce an A4. The more times you shake the air a second,
        the higher frequency the note is.
      </p>

      <h2 className="s1">Pitch</h2>
      <p className="s2">
        This is the concept of <strong>pitch</strong>. Higher frequency
        vibrations produce higher pitch notes, and lower frequency vibrations
        produce lower pitch notes.
      </p>

      <p className="s2">
        When you play a note on the guitar by plucking the string, what you're
        really doing is slapping the air with your string to produce a sound. If
        you play an A5 note on guitar, your guitar string will oscillate 440
        times every second. The further the note is down the neck of the guitar,
        the higher pitch the note will be (as the string is shorter and travels
        faster).
      </p>

      <h2 className="s1">Names of the Notes</h2>
      <p className="s2">
        Notes in music are named letters of the alphabet A through to G, with
        <strong>sharps (#)</strong> and <strong>flats (♭)</strong>. Sharps and
        flats are just fancy names for a shift in pitch (e.g an A# is slightly
        higher pitch than an A note, and an A♭ is slightly lower pitched). You
        may be thinking, how much does the note shift? The answer to that is a
        <strong>half note</strong> or <strong>semitone</strong>, which is one
        fret on the guitar, a whole note or <strong>tone</strong> is two frets.
      </p>

      <h2 className="s1">Putting it all together</h2>
      <p className="s2">
        This all may seem very complicated and don't be discouraged if you do
        not understand it at first. The main takeaway from this is that there
        are many different notes/pitches on a guitar, and these pitches are
        labelled A through G and those sharps and flats.
      </p>

      <p className="s2">
        The diagram below shows every note on the fret board. You don't worry
        about memorizing it, it's best to come back to this diagram as you need
        it.
      </p>

      <img
        className="d1"
        style={{ maxWidth: "75%", minWidth: "20%" }}
        src="/images/scales/notes-diagram.png"
        alt="Guitar Diagram"
      />

      <h2 className="s1">Side note (pun intended)</h2>
      <p className="s2">
        Notes are universal throughout all music, not just guitar. If you can
        learn the notes on guitar, you can apply this knowledge to any
        instrument (excluding percussion). All chords and melodies are built
        using notes. They are the atoms of the music universe!
      </p>

      <p className="s2">Have fun and happy noting.</p>

      <p className="next">
        Up next <a href="/basics/scales">Scales</a>
      </p>
    </div>
  );
}

export default Notes;
