function MajorTable() {
  return (
    <div className="chord-table-wrapper">
      <div className="chord-table">
        <table id="major-table">
          <tr>
            <th>I</th>
            <th>II</th>
            <th>III</th>
            <th>IV</th>
            <th>V</th>
            <th>VI</th>
            <th>VII</th>
          </tr>
          <tr>
            <td>Cmaj</td>
            <td>Dmin</td>
            <td>Emin</td>
            <td>Fmaj</td>
            <td>Gmaj</td>
            <td>Amin</td>
            <td>Bdim</td>
          </tr>
          <tr>
            <td>Cmaj7</td>
            <td>Dmin7</td>
            <td>Emin7</td>
            <td>Fmaj7</td>
            <td>G7</td>
            <td>Amin7</td>
            <td>Bm7b5</td>
          </tr>
        </table>
      </div>

      {/* <div className="key-selector">
        Key:
        <button onClick={{"populateTable('C');populateProgTable('C');"}}>C</button>
        <button onclick="populateTable('Db');populateProgTable('Db');">
          C#/Db
        </button>
        <button onclick="populateTable('D');populateProgTable('D');">D</button>
        <button onclick="populateTable('Eb');populateProgTable('Eb');">
          D#/Eb
        </button>
        <button onclick="populateTable('E');populateProgTable('E');">E</button>
        <button onclick="populateTable('F');populateProgTable('F');">F</button>
        <button onclick="populateTable('Gb');populateProgTable('Gb');">
          F#/Gb
        </button>
        <button onclick="populateTable('G');populateProgTable('G');">G</button>
        <button onclick="populateTable('Ab');populateProgTable('Ab');">
          G#/Ab
        </button>
        <button onclick="populateTable('A');populateProgTable('A');">A</button>
        <button onclick="populateTable('Bb');populateProgTable('Bb');">
          A#/Bb
        </button>
        <button onclick="populateTable('B');populateProgTable('B');">B</button>
      </div> */}
    </div>
  );
}

export default MajorTable;
