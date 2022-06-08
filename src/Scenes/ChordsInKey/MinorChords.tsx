import { chordLookup } from "../../Components/Tables/chord-lookup";

export default function MinorChords({ keyStr }: { keyStr: string }) {
  const chords = chordLookup[keyStr as keyof typeof chordLookup];
  return (
    <>
      <h2>Common chord progressions:</h2>
      <div className="chord-table-wrapper">
        <div className="prog-table">
          <table id="prog-table">
            <tr>
              <th>Roman Numerals</th>
              <th>Chords</th>
            </tr>
            <tr>
              <td>i - VI - VII</td>
              <td>{`${chords[0][0]} - ${chords[0][5]} - ${chords[0][6]}`}</td>
            </tr>
            <tr>
              <td>i - iv - VII</td>
              <td>{`${chords[0][0]} - ${chords[0][3]} - ${chords[0][6]}`}</td>
            </tr>
            <tr>
              <td>i - iv - v</td>
              <td>{`${chords[0][0]} - ${chords[0][3]} - ${chords[0][4]}`}</td>
            </tr>
            <tr>
              <td>i - VI - III - VII</td>
              <td>{`${chords[0][0]} - ${chords[0][5]} - ${chords[0][2]} - ${chords[0][6]}`}</td>
            </tr>
            <tr>
              <td>ii - v - i</td>
              <td>{`${chords[0][1]} - ${chords[0][4]} - ${chords[0][0]}`}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
