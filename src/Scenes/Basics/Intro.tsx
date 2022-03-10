function Intro() {
  return (
    <div>
      <div>
        <h1>Introduction</h1>
      </div>

      <h2 className="s1">Introducing the Guitar</h2>
      <p className="s2">
        As you already know, the guitar is a six stringed instrument that is
        played all around the world. The guitar consists of many parts
        including:
      </p>
      <ul>
        <li>Strings</li>
        <li>Neck</li>
        <li>Body</li>
        <li>Headstock</li>
        <li>Fretboard</li>
        <li>Bridge</li>
        <li>etc</li>
      </ul>
      <p className="s2">
        These terms are used frequently by guitarists, so it's worthwhile to
        familiarise yourself with the diagram below.
      </p>

      <img
        className="d1"
        style={{ maxWidth: "80vw; min-width: 20vw" }}
        src="/images/basics/guitar-diagram.jpg"
        alt="Guitar Diagram"
      />

      <h2 className="s1">Names of the strings</h2>
      <p className="s2">
        The six strings of a guitar all have a corresponding note (in standard
        tuning). Starting with the lowest/thickest string they are
        <strong>E A D G B e</strong>. You might notice that two of the strings
        are the same note, these are commonly referred to as the 'low e string'
        and the 'high e string'.
      </p>
      <p className="s2">
        This is worth commiting to memory, as guitarists will often refer to
        these strings by name. A good way to do this is through a little poem.
        Easter Bunnies Get Drunk At Easter.
      </p>

      <ul>
        <li>
          <strong>e</strong>aster (high e)
        </li>
        <li>
          <strong>B</strong>unnies
        </li>
        <li>
          <strong>G</strong>et
        </li>
        <li>
          <strong>D</strong>runk
        </li>
        <li>
          <strong>A</strong>t
        </li>
        <li>
          <strong>E</strong>aster (low e)
        </li>
      </ul>

      <p className="s2">
        Say it over and over again, until it is burned into your memory :).
      </p>
      <p className="next">
        Up next <a href="/basics/notes">Notes</a>
      </p>
    </div>
  );
}

export default Intro;
