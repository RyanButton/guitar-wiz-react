import MajorTable from "../../Components/Tables/MajorTable";

function ChordsinMajor() {
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

      <MajorTable />

      <h2>Common chord progressions:</h2>
      <div className="chord-table-wrapper">
        <div className="prog-table">
          <table id="prog-table">
            <tr>
              <th>Roman Numerals</th>
              <th>Chords</th>
            </tr>
            <tr>
              <td>I - IV - V</td>
              <td>Cmaj - Fmaj - Gmaj</td>
            </tr>
            <tr>
              <td>I - VI - IV - V</td>
              <td>Cmaj - Amin - Fmaj - Gmaj</td>
            </tr>
            <tr>
              <td>II - V - I</td>
              <td>Dmin - Gmaj - Cmaj</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="s2">
        <h3 style={{ marginBottom: "0px" }}>Other keys:</h3>
        <a href="/chords-in-key/chords-in-minor">Chords in minor key</a>
      </div>

      <script src="/scripts/chord-table.js"></script>
    </div>
  );
}

export default ChordsinMajor;
