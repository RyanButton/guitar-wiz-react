function MinorTable() {
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
            <td>Cmin</td>
            <td>Ddim</td>
            <td>Ebmaj</td>
            <td>Fmin</td>
            <td>Gmin</td>
            <td>Abmaj</td>
            <td>Bbmaj</td>
          </tr>
          <tr>
            <td>Cmin7</td>
            <td>Dm7b5</td>
            <td>Ebmaj7</td>
            <td>Fmin7</td>
            <td>Gmin7</td>
            <td>Abmaj7</td>
            <td>Bb7</td>
          </tr>
        </table>
      </div>

      {/* <div class="key-selector">
      Key:
      <button onclick="populateTable('Cm');populateProgTable('Cm');">C</button>
      <button onclick="populateTable('Dbm');populateProgTable('Dbm');">
        C#/Db
      </button>
      <button onclick="populateTable('Dm');populateProgTable('Dm')">D</button>
      <button onclick="populateTable('Ebm');populateProgTable('Ebm')">
        D#/Eb
      </button>
      <button onclick="populateTable('Em');populateProgTable('Em')">E</button>
      <button onclick="populateTable('Fm');populateProgTable('Fm')">F</button>
      <button onclick="populateTable('Gbm');populateProgTable('Gbm')">
        F#/Gb
      </button>
      <button onclick="populateTable('Gm');populateProgTable('Gm')">G</button>
      <button onclick="populateTable('Abm');populateProgTable('Abm')">
        G#/Ab
      </button>
      <button onclick="populateTable('Am');populateProgTable('Am')">A</button>
      <button onclick="populateTable('Bbm');populateProgTable('Bbm')">
        A#/Bb
      </button>
      <button onclick="populateTable('Bm');populateProgTable('Bm')">B</button>
    </div>*/}
    </div>
  );
}

export default MinorTable;
