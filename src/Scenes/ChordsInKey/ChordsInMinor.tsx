import MinorTable from "../../Components/Tables/MinorTable";

function ChordsInMinor() {
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

      <MinorTable />

      <h2>Common chord progressions:</h2>
      <div className="prog-table">
        <table id="prog-table">
          <tr>
            <th>Roman Numerals</th>
            <th>Chords</th>
          </tr>
          <tr>
            <td>i - VI - VII</td>
            <td>Cmin - Abmaj - Bbmaj</td>
          </tr>
          <tr>
            <td>i - iv - VII</td>
            <td>Cmin - Fmin - Bbmaj</td>
          </tr>
          <tr>
            <td>i - iv - v</td>
            <td>Cmin - Fmin - Gmin</td>
          </tr>
          <tr>
            <td>i - VI - III - VII</td>
            <td>Cmin - Abmaj - Ebmaj - Bbmaj</td>
          </tr>
          <tr>
            <td>ii - v - i</td>
            <td>Ddim - Gmin - Cmin</td>
          </tr>
        </table>
      </div>

      <div className="s2">
        <h3 style={{ marginBottom: "0px" }}>Other keys:</h3>
        <a href="/chords-in-key/chords-in-major">Chords in major key</a>
      </div>

      <script src="/scripts/chord-table.js"></script>
    </div>
  );
}

export default ChordsInMinor;
