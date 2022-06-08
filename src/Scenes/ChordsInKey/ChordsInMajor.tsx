import { useState } from "react";
import ChordKeyTable from "../../Components/Tables/ChordKeyTable";
import MajorChords from "./MajorChords";

function ChordsinMajor() {
  const [key, setKey] = useState<string>("C");
  return (
    <div>
      <div>
        <h1>Chords in Major</h1>
      </div>

      <p className="s2">
        The following chart presents all common chords in a major key. The
        position on the scale is determined by roman numerals. Be sure to select
        your desired key.
      </p>

      <ul>
        <li>
          <b>Major chord sequence:</b>Maj Min Min Maj Maj Min Dim
        </li>
      </ul>

      <ChordKeyTable keyStr={key} />

      <button onClick={() => setKey("C")}>C</button>
      <button onClick={() => setKey("Db")}>C#/Db</button>
      <button onClick={() => setKey("D")}>D</button>
      <button onClick={() => setKey("Eb")}>D#/Eb</button>
      <button onClick={() => setKey("E")}>E</button>
      <button onClick={() => setKey("F")}>F</button>
      <button onClick={() => setKey("Gb")}>F#/Gb</button>
      <button onClick={() => setKey("G")}>G</button>
      <button onClick={() => setKey("Ab")}>G#/Ab</button>
      <button onClick={() => setKey("A")}>A</button>
      <button onClick={() => setKey("Bb")}>A#/Bb</button>
      <button onClick={() => setKey("B")}>B</button>

      <MajorChords keyStr={key} />

      <div className="s2">
        <h3 style={{ marginBottom: "0px" }}>Other keys:</h3>
        <a href="/chords-in-key/chords-in-minor">Chords in minor key</a>
      </div>
    </div>
  );
}

export default ChordsinMajor;
