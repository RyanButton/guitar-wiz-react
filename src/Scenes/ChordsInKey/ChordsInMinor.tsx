import { useState } from "react";
import ChordKeyTable from "../../Components/Tables/ChordKeyTable";
import MinorChords from "./MinorChords";

function ChordsInMinor() {
  const [key, setKey] = useState<string>("Cm");
  return (
    <div>
      <div>
        <h1>Chords in Minor</h1>
      </div>

      <p className="s2">
        The following chart presents all common chords in a minor key. The
        position on the scale is determined by roman numerals. Be sure to select
        your desired key.
      </p>

      <ul>
        <li>
          <b>Minor chord sequence:</b> Min Dim Maj Min Min Maj Maj
        </li>
      </ul>

      <ChordKeyTable keyStr={key} />

      <button onClick={() => setKey("Cm")}>C</button>
      <button onClick={() => setKey("Dbm")}>C#/Db</button>
      <button onClick={() => setKey("Dm")}>D</button>
      <button onClick={() => setKey("Ebm")}>D#/Eb</button>
      <button onClick={() => setKey("Em")}>E</button>
      <button onClick={() => setKey("Fm")}>F</button>
      <button onClick={() => setKey("Gbm")}>F#/Gb</button>
      <button onClick={() => setKey("Gm")}>G</button>
      <button onClick={() => setKey("Abm")}>G3/Ab</button>
      <button onClick={() => setKey("Am")}>A</button>
      <button onClick={() => setKey("Bbm")}>A#/Bb</button>
      <button onClick={() => setKey("Bm")}>B</button>

      <MinorChords keyStr={key} />

      <div className="s2">
        <h3 style={{ marginBottom: "0px" }}>Other keys:</h3>
        <a href="/chords-in-key/chords-in-major">Chords in major key</a>
      </div>
    </div>
  );
}

export default ChordsInMinor;
