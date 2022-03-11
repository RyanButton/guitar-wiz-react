function IntervalTable() {
  return (
    <div className="chord-table">
      <table id="interval-table">
        <tbody>
          <tr>
            <th>Number of semitones</th>
            <th>Minor, major, or perfect intervals</th>
            <th>Abbr.</th>
            <th>Augmented or diminished intervals</th>
            <th>Abbr.</th>
            <th>Widely used alternative names</th>
            <th>Abbr.</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Perfect unison</td>
            <td>P1</td>
            <td>Diminished second</td>
            <td>d2</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Minor second</td>
            <td>m2</td>
            <td>Augmented unison</td>
            <td>A1</td>
            <td>Semitone, half tone, half step</td>
            <td>S</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Major second</td>
            <td>M2</td>
            <td>Diminished third</td>
            <td>d3</td>
            <td>Tone, whole tone, whole step</td>
            <td>T</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Minor third</td>
            <td>m3</td>
            <td>Augmented second</td>
            <td>A2</td>
            <td>Trisemitone</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Major third</td>
            <td>M3</td>
            <td>Diminished fourth</td>
            <td>d4</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Perfect fourth</td>
            <td>P4</td>
            <td>Augmented third</td>
            <td>A3</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}>6</td>
            <td rowSpan={2} colSpan={2}></td>
            <td>Diminished fifth</td>
            <td>d5</td>
            <td rowSpan={2}>Tritone</td>
            <td rowSpan={2}>TT</td>
          </tr>
          <tr>
            <td>Augmented fourth</td>
            <td>A4</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Perfect fifth</td>
            <td>P5</td>
            <td>Diminished sixth</td>
            <td>d6</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Minor sixth</td>
            <td>m6</td>
            <td>Augmented fifth</td>
            <td>A5</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>Major sixth</td>
            <td>M6</td>
            <td>Diminished seventh</td>
            <td>d7</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Minor seventh</td>
            <td>m7</td>
            <td>Augmented sixth</td>
            <td>A6</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11</td>
            <td>Major seventh</td>
            <td>M7</td>
            <td>Diminished octave</td>
            <td>d8</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>12</td>
            <td>Perfect octave</td>
            <td>P8</td>
            <td>Augmented seventh</td>
            <td>A7</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IntervalTable;
